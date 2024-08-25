<script>
import { database, ref, get, set } from '../firebase/config.js'

export default {
  data() {
    return {
      invoices: [],
      editingInvoice: null,
      currentDate: new Date().toLocaleDateString('vi-VN').replace(/\//g, '_'), // Ngày hiện tại theo định dạng đ-mm-YYYY
      showSuggestions: false,
      reShowSuggestions: false,
      forcusIdx: 0,
      re_forcusIdx: 0,
      suggestions: [],
      re_suggestions: []
    }
  },
  methods: {
    fetchInvoice(id, selectedDate) {
      const invoiceRef = ref(database, `hoadon/${selectedDate}/${id}`)

      get(invoiceRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.editingInvoice = snapshot.val()
            this.editingInvoice.id = id // Đảm bảo ID được lưu vào editingInvoice
          } else {
            alert('Hóa đơn không tìm thấy.')
          }
        })
        .catch((error) => {
          alert('Lỗi khi lấy dữ liệu:', error)
        })
    },

    validateData() {
      if (!this.editingInvoice.khachHang.trim()) {
        alert('Vui lòng nhập tên khách hàng.')
        return false
      }
      if (this.editingInvoice.sanPham.length === 0 && this.editingInvoice.thuVe.length === 0) {
        alert('Vui lòng nhập đầy đủ thông tin sản phẩm bán ra hợp lệ.')
        return false
      }
      // Kiểm tra sản phẩm bán ra nếu có
      if (this.editingInvoice.sanPham) {
        for (const product of this.editingInvoice.sanPham) {
          if (!product.tenSp.trim() || product.sl <= 0 || product.gia <= 0 || !product.dvt.trim()) {
            alert('Vui lòng nhập đầy đủ thông tin sản phẩm bán ra hợp lệ.')
            return false
          }
        }
      }
      // Kiểm tra sản phẩm thu về nếu có
      if (this.editingInvoice.thuVe) {
        for (const product of this.editingInvoice.thuVe) {
          if (!product.tenSp.trim() || product.sl <= 0 || product.gia <= 0 || !product.dvt.trim()) {
            alert('Vui lòng nhập đầy đủ thông tin sản phẩm thu về hợp lệ.')
            return false
          }
        }
      }
      return true
    },
    saveChanges() {
      if (this.validateData()) {
        if (this.editingInvoice && this.editingInvoice.id) {
          const updateRef = ref(database, `hoadon/${this.currentDate}/${this.editingInvoice.id}`)
          set(updateRef, this.editingInvoice)
            .then(() => {
              alert('Hóa đơn đã được cập nhật thành công')
              this.$router.push({ name: 'about' }) // Quay lại trang danh sách hóa đơn
            })
            .catch((error) => {
              alert('Lỗi khi cập nhật hóa đơn:', error)
            })
        } else {
          alert('Không thể cập nhật hóa đơn. ID không hợp lệ.')
        }
      }
    },
    cancelEdit() {
      this.$router.push({ name: 'about' }) // Quay lại trang danh sách hóa đơn
    },
    removeProduct(index, type) {
      if (type === 'product') this.editingInvoice.sanPham.splice(index, 1)
      else this.editingInvoice.thuVe.splice(index, 1)

      this.updateTotalAmount() // Cập nhật tổng tiền khi xóa sản phẩm
    },
    addProduct() {
      this.editingInvoice.sanPham.push({
        tenSp: '',
        dvt: '',
        sl: null,
        gia: null,
        thanhtien: 0,
        tong_sl: null
      })
    },
    addReturnProduct() {
      this.editingInvoice.thuVe.push({
        tenSp: '',
        dvt: '',
        sl: null,
        gia: null,
        thanhtien: 0,
        tong_sl: null
      })
    },
    updateTotalAmount() {
      return (this.editingInvoice.tongTien =
        this.editingInvoice.sanPham.reduce((sum, product) => sum + product.thanhtien, 0) -
        this.editingInvoice.thuVe.reduce((sum, product) => sum + product.thanhtien, 0))
    },
    calculateTotal(product) {
      if (product.dvt.toLowerCase() === 'thùng' || product.dvt.toLowerCase() === 'dây') {
        product.thanhtien = product.sl * product.tong_sl * product.gia
      } else {
        // nếu dvt không phải thùng thì tính lẻ từng cái
        product.thanhtien = product.sl * 1 * product.gia
      }
      this.updateTotalAmount() // Cập nhật tổng tiền sau khi tính
    },
    // load sản phẩm theo tên
    fetchProductSuggestions(query, index, type) {
      // gán chỉ mục hiện tại của bảng
      if (type === 'product') this.forcusIdx = index
      else this.re_forcusIdx = index

      const dbRef = ref(database, 'goods')

      // Nếu không có ký tự nào hoặc ký tự quá ngắn, xóa hết gợi ý
      if (!query || query.trim().length === 0) {
        if (type === 'product') {
          this.showSuggestions = false
        }
        if (type === 're_data') {
          this.reShowSuggestions = false
        }
        this.suggestions = []
        return
      }

      get(dbRef)
        .then((snapshot) => {
          // console.log('inner', query)
          const products = snapshot.val()
          if (type === 'product') {
            this.showSuggestions = true
          }
          if (type === 're_data') {
            this.reShowSuggestions = true
          }
          if (products) {
            // Lọc các sản phẩm chứa từ khóa trong tenSp
            this.suggestions = Object.values(products).filter((product) => {
              return product.tenSp.toLowerCase().includes(query.toLowerCase())
            })

            // Nếu không tìm thấy sản phẩm nào phù hợp, xóa gợi ý
            if (this.suggestions.length === 0) {
              this.suggestions = []
            }
          } else {
            this.suggestions = []
            if (type === 'product') {
              this.showSuggestions = false
            }
            if (type === 're_data') {
              this.reShowSuggestions = false
            }
          }
        })
        .catch((error) => {
          console.error('Error fetching product suggestions:', error)
          this.suggestions = [] // Nếu có lỗi, cũng xóa gợi ý
          if (type === 'product') {
            this.showSuggestions = false
          }
          if (type === 're_data') {
            this.reShowSuggestions = false
          }
        })
    },
    handleProductSelect(product, index, type) {
      let isExist = false
      let idx = null
      // check nếu sp được thêm đã tồn tại trong dữ liệu trước đó
      if (type === 'product') {
        this.editingInvoice.sanPham.forEach((item, itemIdx) => {
          if (product.tenSp === item.tenSp) {
            alert('Sản phẩm đã tồn tại!')
            this.showSuggestions = false
            isExist = true
          } else {
            idx = itemIdx
          }
        })
      } else {
        this.editingInvoice.thuVe.forEach((item, itemIdx) => {
          if (product.tenSp === item.tenSp) {
            alert('Sản phẩm thu về đã tồn tại!')
            this.showSuggestions = false
            isExist = true
          } else {
            idx = itemIdx
          }
        })
      }

      if (isExist) {
        return
      }
      // nếu chưa tồn tại sp đó thì gán giá trị
      if (type === 'product') {
        this.editingInvoice.sanPham[idx].tenSp = product.tenSp
        this.editingInvoice.sanPham[idx].gia = product.gia
        this.editingInvoice.sanPham[idx].tong_sl = product.tong_sl
        this.editingInvoice.sanPham[idx].dvt = product.dvt

        this.calculateTotal(this.editingInvoice.sanPham[idx])
      } else {
        this.editingInvoice.thuVe[idx].tenSp = product.tenSp
        this.editingInvoice.thuVe[idx].gia = product.gia
        this.editingInvoice.thuVe[idx].tong_sl = product.tong_sl
        this.editingInvoice.thuVe[idx].dvt = product.dvt

        this.calculateTotal(this.editingInvoice.thuVe[idx])
      }

      // Ẩn danh sách gợi ý sau khi chọn
      if (type === 'product') {
        this.showSuggestions = false
      }
      if (type === 're_data') {
        this.reShowSuggestions = false
      }
    }
  },
  mounted() {
    const id = this.$route.query.id
    const selectedDate = this.$route.query.date
    console.log('ID nhận được:', id) // Log ID để kiểm tra
    if (id) {
      this.fetchInvoice(id, selectedDate)
    }
  }
}
</script>

<template>
  <div v-if="editingInvoice">
    <h2>Chỉnh sửa hóa đơn</h2>
    <p>
      <strong class="bold">Khách hàng:</strong>
      <input
        style="border: 1px solid gainsboro; border-radius: 4px; padding: 5px; outline: none"
        v-model="editingInvoice.khachHang"
        class="customer-input"
      />
    </p>
    <span class="bold float-right"
      >Thành tiền:
      <span class="bold" style="color: green">{{ editingInvoice.tongTien }}</span></span
    >
    <p><strong class="bold">🕓:&nbsp;</strong> {{ editingInvoice.ngay }}</p>
    <!-- bảng hóa đơn -->
    <div>Hoá đơn</div>
    <div class="table-wrap">
      <table class="table">
        <tr>
          <td scope="col" class="table-header stt"></td>
          <td scope="col" class="table-header val-sl">Sl</td>
          <td scope="col" class="table-header val-dvt">ĐVT</td>
          <td scope="col" class="table-header ten_sp">Tên SP</td>
          <td scope="col" class="table-header val-gia_sp">Giá</td>
          <td scope="col" class="table-header val-thanh_tien">TT</td>
          <td scope="col" class="table-header val-hanh_dong"></td>
        </tr>
        <tr v-for="(product, index) in editingInvoice.sanPham" :key="index">
          <td scope="col">{{ index + 1 }}</td>
          <!-- sl -->
          <td scope="value" class="val-sl">
            <input
              type="number"
              v-model="product.sl"
              class="sl-input"
              @input="calculateTotal(product)"
            />
          </td>
          <!-- dvt -->
          <td scope="value" class="val-dvt dvt-style">
            <input
              type="text"
              v-model="product.dvt"
              class="dvt-input"
              @input="calculateTotal(product)"
            />
          </td>
          <!-- tên sp -->
          <td scope="value">
            <input
              type="text"
              v-model="product.tenSp"
              class="ten_sp-input"
              @input="fetchProductSuggestions(product.tenSp, index, 'product')"
            />
            <!-- Gợi ý sản phẩm -->
            <ul v-if="showSuggestions && index === forcusIdx" class="suggestions-list">
              <li
                v-for="(suggestion, sIndex) in suggestions"
                :key="sIndex"
                @click="handleProductSelect(suggestion, index, 'product')"
              >
                {{ suggestion.tenSp }}
              </li>
            </ul>
          </td>
          <!-- giá -->
          <td scope="value" class="val-gia_sp">
            <input
              type="number"
              class="gia-input"
              v-model="product.gia"
              @input="calculateTotal(product)"
            />
          </td>
          <!-- thành tiền -->
          <td scope="col" class="val-thanh_tien thanh_tien_style">
            <input class="thanh_tien-input" :value="product.thanhtien" readonly />
          </td>
          <td class="val-hanh_dong" @click="removeProduct(index, 'product')"><p>⌫</p></td>
        </tr>
      </table>
    </div>
    <!-- thêm sp vào hóa đơn -->
    <button class="btn" style="margin-top: 10px" @click="addProduct">+</button>
    <!-- ------------------------------------------------------------ -->

    <!-- bảng thu về -->
    <div>Hàng thu về</div>
    <div class="table-wrap">
      <table class="table">
        <tr>
          <td scope="col" class="table-header stt"></td>
          <td scope="col" class="table-header val-sl">Sl</td>
          <td scope="col" class="table-header val-dvt">ĐVT</td>
          <td scope="col" class="table-header ten_sp">Tên SP</td>
          <td scope="col" class="table-header val-gia_sp">Giá</td>
          <td scope="col" class="table-header val-thanh_tien">TT</td>
          <td scope="col" class="table-header val-hanh_dong"></td>
        </tr>
        <tr v-for="(product, index) in editingInvoice.thuVe" :key="index">
          <td scope="col">{{ index + 1 }}</td>
          <!-- sl -->
          <td scope="value" class="val-sl">
            <input
              type="number"
              v-model="product.sl"
              class="sl-input"
              @input="calculateTotal(product)"
            />
          </td>
          <!-- dvt -->
          <td scope="value" class="val-dvt dvt-style">
            <input
              type="text"
              v-model="product.dvt"
              class="dvt-input"
              @input="calculateTotal(product)"
            />
          </td>
          <!-- tên sp -->
          <td scope="value">
            <input
              type="text"
              v-model="product.tenSp"
              class="ten_sp-input"
              @input="fetchProductSuggestions(product.tenSp, index, 're_data')"
            />
            <!-- Gợi ý sản phẩm -->
            <ul v-if="reShowSuggestions && index === re_forcusIdx" class="suggestions-list">
              <li
                v-for="(suggestion, sIndex) in suggestions"
                :key="sIndex"
                @click="handleProductSelect(suggestion, index, 're_data')"
              >
                {{ suggestion.tenSp }}
              </li>
            </ul>
          </td>
          <!-- giá -->
          <td scope="value" class="val-gia_sp">
            <input
              type="number"
              class="gia-input"
              v-model="product.gia"
              @input="calculateTotal(product)"
            />
          </td>
          <!-- thành tiền -->
          <td scope="col" class="val-thanh_tien thanh_tien_style">
            <input class="thanh_tien-input" :value="product.thanhtien" readonly />
          </td>
          <td class="val-hanh_dong" @click="removeProduct(index, 'return_product')"><p>⌫</p></td>
        </tr>
      </table>
    </div>

    <!-- thêm sp thu về -->
    <button class="btn" style="margin-top: 10px" @click="addReturnProduct">+</button>

    <!-- <p><strong>Tổng tiền:</strong> {{ editingInvoice.tongTien }}</p> -->
    <div class="actions">
      <button @click="cancelEdit" class="action-button" style="background-color: #f1f1f1">
        ❌
      </button>
      <button @click="saveChanges" class="action-button" style="margin-left: 15px">✔</button>
    </div>
  </div>
</template>

<style scoped>
.bold {
  font-weight: 900;
}

/* bảng hóa đơn */
.table-header {
  border: 1px solid rgb(236, 230, 230);
  padding: 0;
  margin: 0;
}
td[scope='col'] {
  background: rgb(241, 241, 241);
  text-align: center;
}
td[scope='value'] {
  border: 0.5px solid gainsboro;
  align-items: center !important;
}
/* cột tên sản phẩm, xử lý form gợi ý tìm kiếm */
.suggestions-list {
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: auto;
  position: absolute;
  background-color: white;
  z-index: 1000;
  width: 150px;
  list-style-type: none;
  padding-left: 0;
}
.suggestions-list li {
  padding: 10px;
  cursor: pointer;
}
.suggestions-list li:hover {
  background-color: #f0f0f0;
}

/* cột số lượng sp */
.val-sl,
.val-sl > input {
  text-align: center;
  width: 23px !important;
}
/* loại bỏ style input */
.thanh_tien-input,
.ten_sp-input,
.dvt-input,
.gia-input,
.sl-input {
  outline: none !important;
  padding: 0 !important;
  border: none;
  width: 100%;
}
.thanh_tien-input {
  background: transparent;
}
/* cột giá */
.val-gia_sp,
.val-gia_sp > input {
  text-align: center;
  width: 40px !important;
}
/* cột thành tiền */
.val-thanh_tien .thanh_tien-input,
.val-thanh_tien {
  text-align: center;
  width: 50px !important;
  cursor: pointer;
}
.thanh_tien_style {
  color: green;
  font-weight: bold;
  position: relative;
}

/* cột đơn vị tính */
.val-dvt,
.val-dvt > input {
  text-align: center;
  width: 43px !important;
}
.dvt-style {
  border-radius: 6px;
}
/* cột hành động */
.val-hanh_dong {
  cursor: pointer;
  color: red;
  &:hover {
    color: rgb(210, 150, 150);
  }
}
/* ẩn đi cái nút chỉnh lên xuống của input */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* các nút */
.action-button {
  color: white;
  background: #298a5e;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s all linear;
  margin-right: 15px;
}
.actions {
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>
