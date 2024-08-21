<script>
// Import các thư viện Firebase cần thiết
import { database, ref, set, get } from '../firebase/config.js'

export default {
  data() {
    return {
      productData: [{ khachHang: '', tenSp: '', sl: 0, gia: 0, thanhtien: 0, dvt: '' }],
      khachHang: '',
      tongTien: 0,
      number1: 0, // Số thứ nhất cho phép toán
      number2: 0, // Số thứ hai cho phép toán
      operation: '', // Phép toán hiện tại
      result: null, // Kết quả của phép toán
      totalAmount: 0 // Khởi tạo giá trị cho totalAmount
    }
  },
  methods: {
    // Thêm sản phẩm mới vào danh sách
    addProduct() {
      this.productData.push({
        khachHang: '',
        tenSp: '',
        sl: 0,
        gia: 0,
        thanhtien: 0,
        dvt: ''
      })
    },
    // Tính toán thành tiền của từng sản phẩm
    calculateTotal(product) {
      product.thanhtien = product.sl * product.gia
      this.updateTotalAmount() // Cập nhật tổng tiền sau khi tính
    },
    // Cập nhật tổng tiền hóa đơn
    updateTotalAmount() {
      this.tongTien = this.productData.reduce((sum, product) => sum + product.thanhtien, 0)
    },
    // Kiểm tra tính hợp lệ của dữ liệu
    validateData() {
      if (!this.khachHang.trim()) {
        alert('Vui lòng nhập tên khách hàng.')
        return false
      }
      for (const product of this.productData) {
        if (!product.tenSp.trim() || product.sl <= 0 || product.gia <= 0 || !product.dvt.trim()) {
          alert('Vui lòng nhập đầy đủ thông tin sản phẩm hợp lệ.')
          return false
        }
      }
      return true
    },
    // Lấy thời gian hiện tại định dạng DD/MM/YYYY HH:MM
    getCurrentDateTime() {
      const now = new Date()
      return `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
    },
    // Lưu dữ liệu sản phẩm vào LocalStorage
    saveProductDataToLocalStorage() {
      const dataToSave = {
        productData: this.productData,
        khachHang: this.khachHang,
        tongTien: this.tongTien
      }
      localStorage.setItem('productData', JSON.stringify(dataToSave))
    },
    // Tải dữ liệu sản phẩm từ LocalStorage
    loadProductDataFromLocalStorage() {
      const savedData = JSON.parse(localStorage.getItem('productData'))
      if (savedData) {
        this.productData = savedData.productData || this.productData
        this.khachHang = savedData.khachHang || this.khachHang
        this.tongTien = savedData.tongTien || this.tongTien
      }
    },
    // Xuất dữ liệu hóa đơn và lưu vào Firebase
    exportToJSON() {
      if (this.validateData()) {
        const ngay = new Date().toLocaleDateString('vi-VN').replace(/\//g, '_')
        const sanPhamData = this.productData.map((product) => ({
          dvt: product.dvt,
          gia: product.gia,
          sl: product.sl,
          thanhtien: product.thanhtien,
          tenSp: product.tenSp
        }))

        const dataRef = ref(database, 'hoadon/' + ngay)

        get(dataRef)
          .then((snapshot) => {
            let existingData = null
            let currentIndex = snapshot.size

            snapshot.forEach((childSnapshot) => {
              const data = childSnapshot.val()
              if (data.khachHang === this.khachHang) {
                existingData = data
                currentIndex = childSnapshot.key
              }
            })

            if (existingData) {
              sanPhamData.forEach((newProduct) => {
                const existingProduct = existingData.sanPham.find(
                  (prod) => prod.tenSp === newProduct.tenSp && prod.dvt === newProduct.dvt
                )
                if (existingProduct) {
                  existingProduct.sl += newProduct.sl
                  existingProduct.thanhtien += newProduct.thanhtien
                } else {
                  existingData.sanPham.push(newProduct)
                }
              })

              existingData.tongTien += this.tongTien

              const updateRef = ref(database, `hoadon/${ngay}/${currentIndex}`)
              set(updateRef, existingData)
                .then(() => {
                  alert('Dữ liệu đã được cập nhật thành công')
                  this.clearAll() // Xóa dữ liệu sau khi lưu
                })
                .catch((error) => alert('Lỗi khi cập nhật dữ liệu:', error))
            } else {
              const newRecordRef = ref(database, `hoadon/${ngay}/${snapshot.size}`)
              const exportData = {
                khachHang: this.khachHang,
                ngay: this.getCurrentDateTime(),
                sanPham: sanPhamData,
                tongTien: this.tongTien
              }

              set(newRecordRef, exportData)
                .then(() => {
                  alert('Dữ liệu đã được tạo mới thành công')
                  this.clearAll() // Xóa dữ liệu sau khi lưu
                })
                .catch((error) => alert('Lỗi khi tạo dữ liệu:', error))
            }
          })
          .catch((error) => alert('Lỗi khi lấy dữ liệu:', error))
      }
    },
    // Xóa tất cả dữ liệu
    clearAll() {
      this.productData = [{ khachHang: '', tenSp: '', sl: 0, gia: 0, thanhtien: 0, dvt: '' }]
      this.khachHang = ''
      this.tongTien = 0
      localStorage.removeItem('productData')
    }
    // Tính toán dựa trên phép toán được chọn
  },
  watch: {
    // Lưu dữ liệu vào localStorage khi productData thay đổi
    productData: {
      handler() {
        this.saveProductDataToLocalStorage()
      },
      deep: true
    },
    // Lưu tên khách hàng vào localStorage khi thay đổi
    khachHang: {
      handler(newValue) {
        localStorage.setItem('khachHang', newValue)
      }
    }
  },
  created() {
    // Load dữ liệu từ localStorage khi component được tạo
    this.loadProductDataFromLocalStorage()
  }
}
</script>

<template>
  <div class="container">
    <div class="khach-hang">
      <p>Khách hàng:</p>
      <input required v-model="khachHang" />
    </div>
    <!-- bảng hóa đơn -->
    <table class="table">
      <caption>
        Hóa đơn
      </caption>
      <tr>
        <td scope="col" class="table-header stt"></td>
        <td scope="col" class="table-header val-sl">Sl</td>
        <td scope="col" class="table-header val-dvt">ĐVT</td>
        <td scope="col" class="table-header ten_sp">Tên SP</td>
        <td scope="col" class="table-header val-gia_sp">Giá</td>
        <td scope="col" class="table-header val-thanh_tien">TT</td>
        <td scope="col" class="table-header val-hanh_dong"></td>
      </tr>
      <tr>
        <td scope="col">1</td>
        <td scope="value" class="val-sl">
          <input type="number" class="sl-input" />
        </td>
        <td scope="value" class="val-dvt dvt-style">
          <select class="dvt-input">
            <option value="Thùng">T</option>
            <option value="Gói">G</option>
            <option value="Hộp">H</option>
            <option value="Cái">C</option>
            <option value="Bịch">B</option>
            <option value="Chai">Ch</option>
          </select>
        </td>
        <td scope="value">
          <input type="text" class="ten_sp-input" />
        </td>
        <td scope="value" class="val-gia_sp">
          <input type="number" class="gia-input" />
        </td>
        <td scope="col" class="val-thanh_tien thanh_tien_style">40569</td>
        <td class="val-hanh_dong"><p>⌫</p></td>
      </tr>
    </table>

    <!-- bảng thu về -->
    <table class="table">
      <caption>
        Hàng thu về
      </caption>
      <tr>
        <td scope="col" class="table-header stt"></td>
        <td scope="col" class="table-header val-sl">Sl</td>
        <td scope="col" class="table-header val-dvt">ĐVT</td>
        <td scope="col" class="table-header ten_sp">Tên SP</td>
        <td scope="col" class="table-header val-gia_sp">Giá</td>
        <td scope="col" class="table-header val-thanh_tien">TT</td>
        <td scope="col" class="table-header val-hanh_dong"></td>
      </tr>
      <tr>
        <td scope="col">1</td>
        <td scope="value" class="val-sl">
          <input type="number" class="sl-input" />
        </td>
        <td scope="value" class="val-dvt dvt-style">
          <select class="dvt-input">
            <option value="Thùng">T</option>
            <option value="Gói">G</option>
            <option value="Hộp">H</option>
            <option value="Cái">C</option>
            <option value="Bịch">B</option>
            <option value="Chai">Ch</option>
          </select>
        </td>
        <td scope="value">
          <input type="text" class="ten_sp-input" />
        </td>
        <td scope="value" class="val-gia_sp">
          <input type="number" class="gia-input" />
        </td>
        <td scope="col" class="val-thanh_tien thanh_tien_style">40569</td>
        <td class="val-hanh_dong"><p>⌫</p></td>
      </tr>
    </table>
    <!-- tổng tiền -->
    <p class="tong-tien">Tổng tiền <span>100000</span></p>
    <!-- các nút xử lý -->
    <div class="btn-wrap">
      <button class="btn">🔄</button>
      <button class="btn">➕</button>
      <button class="btn">⤴️</button>
    </div>
  </div>
</template>

<style scoped>
header {
  margin-top: 1rem;
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 20px;
}
/* input khách hang css */
.khach-hang {
  margin-bottom: 20px;
  display: flex;
  margin-top: 10px;
  font-size: 1.1rem;
  margin-left: 10px;
}
.khach-hang > p {
  width: 150px;
}
.khach-hang > input {
  width: 100%;
  outline: none;
  font-size: 1.1;
  border-radius: 5px;
  border: 1px grey solid;
  margin-right: 8px;
}
/* -------- */

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
/* cột số lượng sp */
.val-sl,
.val-sl > input {
  text-align: center;
  width: 23px !important;
}
/* loại bỏ style input */
.ten_sp-input,
.dvt-input,
.gia-input,
.sl-input {
  outline: none !important;
  padding: 0 !important;
  border: none;
  width: 100%;
}
/* cột giá */
.val-gia_sp,
.val-gia_sp > input {
  text-align: center;
  width: 40px !important;
}
/* cột thành tiền */
.val-thanh_tien {
  text-align: center;
  width: 50px !important;
}
.thanh_tien_style {
  color: green;
  font-weight: bold;
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
/* ---------- */
/* tổng tiền */
.tong-tien {
  position: absolute;
  font-size: 1.2rem;
  right: 0;
}
.tong-tien > span {
  color: #00bd7e;
  font-weight: bold;
}
/* các nút */
.btn {
  border: 0.5px solid #00bd7e;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  padding: 5px 15px;
  rotate: 180deg;
  margin-top: 1.5rem;
  margin-left: 1rem;
}
.btn-wrap {
  margin-top: 1rem;
  position: absolute;
  right: 10px;
}
</style>
