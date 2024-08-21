<template>
  <div class="about">
    <h1>Danh sách hóa đơn</h1>

    <!-- Chọn ngày -->
    <div class="date-select">
      <label for="select-date">Chọn ngày:</label>
      <select class="select-date" v-model="selectedDate" @change="fetchInvoices">
        <option class="select-date-option" v-for="date in availableDates" :key="date" :value="date">
          {{ date }}
        </option>
      </select>
      <label for="total-invoices"
        >&nbsp;Tổng tiền:
        <span style="color: green; font-weight: 600">{{ totalInvoices() }}</span></label
      >
    </div>

    <!-- Danh sách hóa đơn và spinner -->
    <div>
      <div v-if="loading" class="spinner"></div>
      <div v-else-if="invoices.length > 0">
        <ul>
          <li class="span-li" v-for="invoice in paginatedInvoices" :key="invoice.id">
            <p>KH:</p>
            <p class="kh-li" @click="viewInvoice(invoice)">{{ invoice.khachHang }}</p>
            <button @click="deleteInvoice(invoice.id)">🗑️</button>
            <button @click="editInvoice(invoice)">✏️</button>
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
          <button @click="exportToExcel" style="padding: 5px 15px; float: right">Xuất</button>
        </div>
      </div>
      <div v-else>
        <p>Không có hóa đơn nào để hiển thị.</p>
      </div>
    </div>

    <!-- Chi tiết hóa đơn -->
    <div v-if="selectedInvoice">
      <h2>Chi tiết hóa đơn</h2>
      <p><strong>Khách hàng:</strong> {{ selectedInvoice.khachHang }}</p>
      <p><strong>Ngày:</strong> {{ selectedInvoice.ngay }}</p>
      <ul class="detail">
        <li class="detail-li">
          <span> Tên SP </span>
          <span>- SL</span>
          <span>- ĐVT</span>
          <span>- Giá</span>
          <span>- TT</span>
        </li>
      </ul>
      <ul class="detail">
        <li class="detail-li" v-for="(product, index) in selectedInvoice.sanPham" :key="index">
          <span class="li-span">{{ product.tenSp }}</span> -
          <span class="li-span">{{ product.sl }}</span> -
          <span class="li-span">{{ product.dvt }}</span> -
          <span class="li-span">{{ product.gia }}</span> -
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
        query: { id: invoice.id } // Truyền ID hóa đơn qua query params
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

<style>
.span-li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  text-decoration: none;
  margin-bottom: 5px;
}
.kh-li {
  color: green;
  width: 180px;
  border: 1px solid green;
  padding: 5px 10px;
  border-radius: 4px;
}
.detail {
  padding-left: 15px;
}
.li-span {
  font-weight: bold;
}
.note {
  font-style: italic;
  color: gray;
}
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
}
.date-select {
  font-size: 1.2rem;
  border: none;
  padding: 0.5rem;
  box-sizing: border-box;
}
.select-date {
  border: none;
  outline: none;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
