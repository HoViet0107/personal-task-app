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
    },
    // Tính toán dựa trên phép toán được chọn
    calculateResult() {
      switch (this.operation) {
        case 'add':
          this.result = this.number1 + this.number2
          break
        case 'multiply':
          this.result = this.number1 * this.number2
          break
        case 'minus':
          this.result = this.number1 - this.number2
          break
        case 'devide':
          this.result = this.number1 / this.number2
          break
      }
    }
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
  <header>Hóa đơn sản phẩm</header>

  <div class="khach-hang">
    <p>Khách hàng:</p>
    <p><input required v-model="khachHang" /></p>
  </div>

  <main>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Tên SP</th>
          <th style="padding: 0px 10px; width: 35px">SL</th>
          <th style="padding: 0px 5px">ĐVT</th>
          <th style="padding: 0px 15px; width: 35px !important">Giá</th>
          <th style="padding: 0px 5px; width: 40px">Thành tiền</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in productData" :key="index">
          <td>{{ index + 1 }}</td>
          <!-- Số thứ tự -->
          <td><input required v-model="product.tenSp" class="ten-sp" /></td>
          <td class="sl">
            <input
              required
              class="sl"
              v-model.number="product.sl"
              type="number"
              @input="calculateTotal(product)"
            />
          </td>
          <td>
            <select class="dvt" v-model="product.dvt">
              <option value="">---</option>
              <option value="Thùng">T</option>
              <option value="Gói">G</option>
              <option value="Hộp">H</option>
              <option value="Cái">C</option>
              <option value="Bịch">B</option>
            </select>
          </td>
          <td class="gia">
            <input
              required
              class="gia"
              v-model.number="product.gia"
              type="number"
              @input="calculateTotal(product)"
            />
          </td>
          <td><input required class="thanhtien" :value="product.thanhtien" readonly /></td>
        </tr>
      </tbody>
    </table>

    <p class="to-right">Tổng tiền: {{ tongTien }}</p>
    <!-- Hiển thị tổng tiền -->
    <div class="btn-wrap">
      <button class="to-right" @click="clearAll">🗑️</button>
      <button class="to-right" @click="addProduct">➕</button>
      <button class="to-right" @click="exportToJSON">Xuất</button>
    </div>
    <div style="margin-top: 1rem; float: right">
      <!-- Combobox cho phép người dùng chọn phép toán -->
      <select style="margin-right: 10px" v-model="operation" @change="calculateResult">
        <option value="">(---)</option>
        <option value="add">( + )</option>
        <option value="multiply">( * )</option>
        <option value="minus">( - )</option>
        <option value="devide">( / )</option>
      </select>
      <!-- Ô nhập liệu số thứ nhất -->
      <input
        style="margin-right: 10px; width: 80px"
        v-model.number="number1"
        type="number"
        placeholder="Số thứ nhất"
      />

      <!-- Ô nhập liệu số thứ hai -->
      <input
        style="margin-right: 10px; width: 80px"
        v-model.number="number2"
        type="number"
        placeholder="Số thứ hai"
      />
      <button @click="calculateResult">( = )</button>

      <!-- Hiển thị kết quả -->
      <p>Kết quả: {{ result }}</p>
    </div>
  </main>
</template>

<style scoped>
header {
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 20px;
}

.khach-hang {
  margin-bottom: 20px;
  display: flex;
  margin-top: 10px;
  font-size: 1.1rem;
}
.khach-hang > p > input {
  outline: none;
  font-size: 1rem;
}
main {
  width: 100%;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}
/* Các nút bấm lên/xuống trong input number sẽ bị ẩn */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 1px;
}

input[type='number'] {
  -moz-appearance: textfield; /* Ẩn nút lên/xuống trên Firefox */
}

th,
td {
  border: 1px solid #ddd;
  padding: 0px;
  text-align: center;
}
td > input {
  font-size: 1rem;
  border: none;
  outline: none;
}
.ten-sp {
  width: 100%;
}
.sl {
  width: 40px;
}
.gia {
  width: 55px;
}
.dvt {
  border: none;
}
.thanhtien {
  width: 70px;
}
th {
  background-color: #f2f2f2;
  font-weight: bold;
}

input[type='number'],
input[type='text'],
select {
  /* width: fit-content; */
  box-sizing: border-box;
  padding: 5px;
  outline: none;
}

button {
  margin-top: 20px;
  margin-right: 10px;
  padding: 5px 1rem;
}
.btn-wrap {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.btn-wrap button {
  margin-left: 10px;
}
</style>
