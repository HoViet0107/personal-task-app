<script>
import { database, ref, get, remove } from '../firebase/config.js'
import * as XLSX from 'xlsx'

export default {
  data() {
    return {
      invoices: [],
      selectedInvoice: null,
      currentPage: 1,
      pageSize: 5,
      selectedDate: '',
      availableDates: [],
      loading: false // Trạng thái loading
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.invoices.length / this.pageSize)
    },
    paginatedInvoices() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.invoices.slice().reverse().slice(start, end) // Đảo ngược thứ tự trước khi phân trang
    }
  },
  methods: {
    fetchAvailableDates() {
      const dataRef = ref(database, 'hoadon/')
      get(dataRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            // Sắp xếp các ngày theo thứ tự giảm dần (mới nhất trước)
            this.availableDates = Object.keys(snapshot.val()).sort(
              (a, b) =>
                new Date(b.split('_').reverse().join('/')) -
                new Date(a.split('_').reverse().join('/'))
            )
            this.selectedDate = this.availableDates[0] // Chọn ngày mới nhất làm mặc định
            this.fetchInvoices() // Gọi để lấy hóa đơn cho ngày mới nhất
            this.totalInvoices() // tính tổng tiền khi lấy được danh sách hóa đơn
          }
        })
        .catch((error) => {
          console.error('Lỗi khi lấy danh sách ngày:', error)
        })
    },
    fetchInvoices() {
      if (!this.selectedDate) return
      this.loading = true // Bắt đầu loading

      const dataRef = ref(database, `hoadon/${this.selectedDate}/`)
      get(dataRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = []
            snapshot.forEach((invoiceSnapshot) => {
              const invoice = invoiceSnapshot.val()
              invoice.id = invoiceSnapshot.key
              data.push(invoice)
            })
            // Sắp xếp hóa đơn theo thứ tự giảm dần của thuộc tính `ngay`
            this.invoices = data.sort((a, b) => new Date(b.ngay) - new Date(a.ngay))
          } else {
            this.invoices = []
          }
        })
        .catch((error) => {
          console.error('Lỗi khi lấy dữ liệu:', error)
        })
        .finally(() => {
          console.log(this.invoices)
          this.loading = false // Kết thúc loading
        })
    },
    viewInvoice(invoice) {
      this.selectedInvoice = invoice
    },
    editInvoice(invoice) {
      this.$router.push({
        name: 'edit',
        query: { id: invoice.id, date: this.selectedDate } // Truyền ID hóa đơn qua query params
      })
    },
    totalInvoices() {
      let total = 0
      this.invoices.forEach((invoice) => {
        total += invoice.tongTien
      })
      console.log(total)

      return total
    },
    deleteInvoice(id) {
      if (confirm('Bạn có chắc chắn muốn xóa hóa đơn này?')) {
        const deleteRef = ref(database, `hoadon/${this.selectedDate}/${id}`) // Đường dẫn đến hóa đơn

        remove(deleteRef)
          .then(() => {
            alert('Hóa đơn đã được xóa thành công')
            this.fetchInvoices() // Tải lại danh sách hóa đơn sau khi xóa
          })
          .catch((error) => {
            alert('Lỗi khi xóa hóa đơn:', error)
          })
      }
    },
    changePage(page) {
      this.currentPage = page
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    exportToExcel() {
      const data = Object.values(this.invoices)

      const dataToExport = []
      const lastInvoiceIndex = data.length - 1

      data.forEach((invoice, invoiceIndex) => {
        invoice.sanPham.forEach((sp, index) => {
          dataToExport.push({
            ID: index === 0 ? invoice.id : '', // Chỉ hiển thị ID ở dòng đầu tiên của mỗi hóa đơn
            'Khách Hàng': index === 0 ? invoice.khachHang : '', // Chỉ hiển thị khách hàng ở dòng đầu tiên của mỗi hóa đơn
            Ngày: index === 0 ? invoice.ngay : '', // Chỉ hiển thị ngày ở dòng đầu tiên của mỗi hóa đơn
            'Tên Sản Phẩm': sp.tenSp,
            'Số lượng': sp.sl,
            'Đơn vị tính': sp.dvt,
            Giá: sp.gia,
            'Thành tiền': sp.thanhtien,
            'Tổng Tiền': index === 0 ? invoice.tongTien : '', // Chỉ hiển thị tổng tiền ở dòng đầu tiên của mỗi hóa đơn
            '': '',
            Tổng:
              invoiceIndex === lastInvoiceIndex && index === invoice.sanPham.length - 1
                ? this.totalInvoices()
                : ''
          })
          // Thêm một hàng trống sau mỗi hóa đơn
        })
        dataToExport.push({
          ID: '',
          'Khách Hàng': '',
          Ngày: '',
          'Tên Sản Phẩm': '',
          'Số lượng': '',
          'Đơn vị tính': '',
          Giá: '',
          'Thành tiền': '',
          'Tổng Tiền': '',
          '': '',
          Tổng: ''
        })
      })
      // Đưa giá trị tổng lên hàng thứ hai
      const totalValue = this.totalInvoices()
      if (dataToExport.length > 1) {
        dataToExport.splice(1, 0, {
          ID: '',
          'Khách Hàng': '',
          Ngày: '',
          'Tên Sản Phẩm': '',
          'Số lượng': '',
          'Đơn vị tính': '',
          Giá: '',
          'Thành tiền': '',
          'Tổng Tiền': '',
          '': '',
          Tổng: totalValue
        })
      }

      // Chuyển đổi JSON thành sheet
      const worksheet = XLSX.utils.json_to_sheet(dataToExport)

      // Tạo workbook mới và thêm sheet vào
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, `Hóa Đơn ${this.selectedDate}`)

      // Xuất file Excel
      XLSX.writeFile(workbook, `hoadon_${this.selectedDate}.xlsx`)
    }
  },
  mounted() {
    this.fetchAvailableDates() // Lấy danh sách các ngày khi component được mount
  }
}
</script>

<template>
  <div class="container">
    <h3>Danh sách hóa đơn</h3>

    <!-- Chọn ngày -->
    <div class="date-select">
      <label class="bold" for="select-date">Chọn ngày:&nbsp;</label>
      <select class="select-date" v-model="selectedDate" @change="fetchInvoices">
        <option class="select-date-option" v-for="date in availableDates" :key="date" :value="date">
          {{ date }}
        </option>
      </select>
      <label class="bold float-right" for="total-invoices"
        >&nbsp;Tổng tiền:
        <span style="color: green; font-weight: 900">{{ totalInvoices() }}</span></label
      >
    </div>

    <!-- Danh sách hóa đơn và spinner -->
    <div class="invoice-wrap">
      <div v-if="loading" class="spinner"></div>
      <div v-else-if="invoices.length > 0">
        <ul class="span-ul">
          <li class="span-li" v-for="invoice in paginatedInvoices" :key="invoice.id">
            <p class="kh-li" @click="viewInvoice(invoice)">{{ invoice.khachHang }}</p>
            <div>
              <button class="btn" @click="deleteInvoice(invoice.id)">🗑</button>
              <button class="btn" @click="editInvoice(invoice)">✎</button>
            </div>
          </li>
        </ul>

        <!-- Phân trang -->
        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">«</button> &nbsp;
          <button v-for="page in totalPages" :key="page" @click="changePage(page)">
            {{ page }}
          </button>
          &nbsp;
          <button @click="nextPage" :disabled="currentPage === totalPages">»</button>
          <!-- xuất toàn bộ hóa đơn ra file excel -->
          <button class="btn" @click="exportToExcel" style="float: right">↪</button>
        </div>
      </div>
      <div v-else>
        <p>Không có hóa đơn nào để hiển thị.</p>
      </div>
    </div>

    <!-- Chi tiết hóa đơn -->
    <div v-if="selectedInvoice">
      <h3>Chi tiết hóa đơn</h3>
      <p>
        <strong class="bold">Khách hàng:</strong> {{ selectedInvoice.khachHang }}
        <span class="float-right bold" style="color: #2fbd7e"
          >&nbsp;{{ selectedInvoice.tongTien }}</span
        >
        <span class="bold float-right">Thành tiền: </span>
      </p>
      <p><strong class="bold">Ngày:</strong> {{ selectedInvoice.ngay }}</p>
      <ul class="">
        <li class="detail-li first">
          <span>SL</span>
          <span>·ĐVT</span>
          <span>- Tên SP </span>
          <span>x Giá</span>
          <span>- TT</span>
        </li>
      </ul>
      <ul class="bill-detail bold">
        <li class="detail-li" v-for="(product, index) in selectedInvoice.sanPham" :key="index">
          <span class="li-span"
            >{{ product.sl }}<span style="font-size: 20px; font-weight: 900">·</span></span
          >
          <span class="li-span">{{ product.dvt }}</span> -
          <span class="li-span">{{ product.tenSp }}</span> x
          <span class="li-span">{{ product.gia }}</span> =
          <span style="color: red; font-weight: bold">{{ product.thanhtien }}</span>
        </li>
      </ul>
      <span class="bold"> Thu về</span>
      <ul class="bill-detail">
        <li class="detail-li" v-for="(product, index) in selectedInvoice.thuVe" :key="index">
          <span class="li-span"
            >{{ product.sl }}<span style="font-size: 20px; font-weight: 900">·</span></span
          >
          <span class="li-span">{{ product.dvt }}</span> -
          <span class="li-span">{{ product.tenSp }}</span> x
          <span class="li-span">{{ product.gia }}</span> =
          <span style="color: red; font-weight: bold">{{ product.thanhtien }}</span>
        </li>
      </ul>
      <p style="font-size: 1.2rem">
        <strong>Tổng tiền: </strong>
        <span style="font-weight: 700; color: green">{{ selectedInvoice.tongTien }}</span>
      </p>
    </div>
  </div>
</template>

<style>
/* header */
h3 {
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
}
.select-date {
  border: #298a5e 2px solid;
  border-radius: 5px;
  font-weight: 600;
}

/* danh mục hóa đơn */
.invoice-wrap {
  margin-top: 16px;
}
.span-ul {
  list-style: none;
  padding: 0;
  margin: 12px 40px;
}
.span-li {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.span-li div > button {
  margin-left: 10px;
}
.kh-li {
  width: 150px;
  cursor: pointer;
  border: 2px solid #298a5e;
  color: #298a5e;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.3s all linear;
  &:hover {
    color: #fff;
    background: #298a5e;
  }
}

/* Chi tiết hóa đơn */
.detail-li.first {
  list-style: none;
}
.bold {
  font-weight: 900;
}
.bill-detail {
  list-style: decimal;
  padding: 0;
  margin: 0 40px;
}
.float-right {
  float: right;
}

/* các button */
.btn {
  border: none;
  border-radius: 5px;
  background: #2fbd7e;
  color: #fff;
  cursor: pointer;
  padding: 0 15px;
  font-size: 20px;
  transition: 0.3s;
  &:hover {
    background: #298a5e;
  }
}
</style>
