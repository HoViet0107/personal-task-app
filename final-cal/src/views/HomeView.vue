<script>
// Import các thư viện Firebase cần thiết
// import AddSp from '@/components/popup/AddSp.vue'
import { database, ref, set, get } from '../firebase/config.js'

export default {
  components: {},
  data() {
    return {
      // productData: [{ tenSp: '', sl: null, gia: null, thanhtien: null, dvt: '' }],
      productData: [],
      returnProductData: [],
      goods: [],
      dvt: [],
      khachHang: '',
      tongTien: 0,
      totalAmount: 0, // tổng tiền hóa đơn
      showSuggestions: false,
      reShowSuggestions: false,
      forcusIdx: null,
      re_forcusIdx: null
    }
  },
  methods: {
    // Thêm sản phẩm mới vào danh sách
    addProduct() {
      this.productData.push({
        khachHang: '',
        tenSp: '',
        sl: null,
        gia: null,
        thanhtien: null,
        dvt: '',
        tong_sl: null
      })
    },
    addReturnProduct() {
      this.returnProductData.push({
        khachHang: '',
        tenSp: '',
        sl: null,
        gia: null,
        thanhtien: null,
        dvt: '',
        tong_sl: null
      })
    },
    // Tính toán thành tiền của từng sản phẩm
    calculateTotal(product) {
      if (product.dvt.toLowerCase() === 'thùng' || product.dvt.toLowerCase() === 'dây') {
        product.thanhtien = product.sl * product.tong_sl * product.gia
      } else {
        // nếu dvt không phải thùng thì tính lẻ từng cái
        product.thanhtien = product.sl * 1 * product.gia
      }
      this.updateTotalAmount() // Cập nhật tổng tiền sau khi tính
    },
    // Cập nhật tổng tiền hóa đơn
    updateTotalAmount() {
      this.tongTien =
        this.productData.reduce((sum, product) => sum + product.thanhtien, 0) -
        this.returnProductData.reduce((sum, product) => sum + product.thanhtien, 0)
    },
    // Kiểm tra tính hợp lệ của dữ liệu
    validateData() {
      if (!this.khachHang.trim()) {
        alert('Vui lòng nhập tên khách hàng.')
        return false
      }
      if (this.productData.length === 0 && this.returnProductData.length === 0) {
        console.log('asas')

        alert('Vui lòng nhập đầy đủ thông tin sản phẩm bán ra hợp lệ.')
        return false
      }
      // Kiểm tra sản phẩm bán ra nếu có
      if (this.productData) {
        for (const product of this.productData) {
          if (!product.tenSp.trim() || product.sl <= 0 || product.gia <= 0 || !product.dvt.trim()) {
            alert('Vui lòng nhập đầy đủ thông tin sản phẩm bán ra hợp lệ.')
            return false
          }
        }
      }

      // Kiểm tra sản phẩm thu về nếu có
      if (this.returnProductData) {
        for (const product of this.returnProductData) {
          if (!product.tenSp.trim() || product.sl <= 0 || product.gia <= 0 || !product.dvt.trim()) {
            alert('Vui lòng nhập đầy đủ thông tin sản phẩm thu về hợp lệ.')
            return false
          }
        }
      }

      return true
    },
    // Lưu dữ liệu sản phẩm vào LocalStorage
    saveProductDataToLocalStorage() {
      const dataToSave = {
        productData: this.productData,
        returnProductData: this.returnProductData,
        khachHang: this.khachHang,
        tongTien: this.tongTien
      }
      localStorage.setItem('bills', JSON.stringify(dataToSave))
    },
    // Tải dữ liệu sản phẩm từ LocalStorage
    loadProductDataFromLocalStorage() {
      const savedData = JSON.parse(localStorage.getItem('bills'))
      if (savedData) {
        this.productData = savedData.productData || this.productData
        this.returnProductData = savedData.returnProductData || this.returnProductData
        this.khachHang = savedData.khachHang || this.khachHang
        this.tongTien = savedData.tongTien || this.tongTien
      }
    },
    //loại bỏ sản phẩm khỏi hóa đơn
    removeProduct(index, type) {
      if (type === 'product') {
        this.productData.splice(index, 1)
      } else {
        this.returnProductData.splice(index, 1)
      }
      this.updateTotalAmount()
    },

    // Lấy thời gian hiện tại định dạng DD/MM/YYYY HH:MM
    getCurrentDateTime() {
      const now = new Date()
      return `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
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
          tenSp: product.tenSp,
          tong_sl: product.tong_sl
        }))
        const thuveData = this.returnProductData.map((re_product) => ({
          dvt: re_product.dvt,
          gia: re_product.gia,
          sl: re_product.sl,
          thanhtien: re_product.thanhtien,
          tenSp: re_product.tenSp,
          tong_sl: re_product.tong_sl
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

              thuveData.forEach((newProduct) => {
                const existingProduct = existingData.thuVe.find(
                  (prod) => prod.tenSp === newProduct.tenSp && prod.dvt === newProduct.dvt
                )
                if (existingProduct) {
                  existingProduct.sl += newProduct.sl
                  existingProduct.thanhtien += newProduct.thanhtien
                } else {
                  existingData.thuVe.push(newProduct)
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
                thuVe: thuveData,
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
      this.productData = []
      this.returnProductData = []
      this.khachHang = ''
      this.tongTien = 0
      localStorage.removeItem('bills')
    },
    // load các đơn vị tính
    fetchDVT() {
      const dataRef = ref(database, 'dvt')

      get(dataRef).then((snapshot) => {
        const options = []
        const data = snapshot.val()
        if (data) {
          Object.entries(data).forEach(([key, value]) => {
            options.push({ key, value })
          })
        }
        this.dvt = options
      })
    },
    // load mục tìm kiếm sản phẩm
    fetchProductSuggestions(query, index, type) {
      // gán chỉ mục hiện tại của bảng
      if (type === 'product') this.forcusIdx = index
      else this.re_forcusIdx = index

      const dbRef = ref(database, 'goods')

      // Nếu không có ký tự nào hoặc ký tự quá ngắn, xóa hết gợi ý
      if (!query || query.trim().length === 0) {
        console.log('Empty query')
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
        this.productData.forEach((item, itemIdx) => {
          if (product.tenSp === item.tenSp) {
            alert('Sản phẩm đã tồn tại!')
            this.showSuggestions = false
            isExist = true
          } else {
            idx = itemIdx
          }
        })
      } else {
        this.returnProductData.forEach((item, itemIdx) => {
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
        this.productData[idx].tenSp = product.tenSp
        this.productData[idx].gia = product.gia
        this.productData[idx].tong_sl = product.tong_sl
        this.productData[idx].dvt = product.dvt

        this.calculateTotal(this.productData[idx])
      } else {
        this.returnProductData[idx].tenSp = product.tenSp
        this.returnProductData[idx].gia = product.gia
        this.returnProductData[idx].tong_sl = product.tong_sl
        this.returnProductData[idx].dvt = product.dvt

        this.calculateTotal(this.returnProductData[idx])
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
  watch: {
    // Lưu dữ liệu vào localStorage khi productData thay đổi
    productData: {
      handler() {
        this.saveProductDataToLocalStorage()
      },
      deep: true
    },
    returnProductData: {
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
    this.fetchDVT()
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
        <tr v-for="(product, index) in productData" :key="index">
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
        <tr v-for="(product, index) in returnProductData" :key="index">
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

    <!-- tổng tiền -->
    <p class="tong-tien">
      Tổng tiền: <span>{{ tongTien }}</span>
    </p>
    <!-- các nút xử lý -->
    <div class="btn-wrap">
      <button class="btn" @click="clearAll">↺</button>
      <!-- Popup thêm sản phẩm/ để đây để thêm sản phẩm vào danh mục
      <AddSp @product-added="addProductToList" /> -->
      <button class="btn" @click="exportToJSON">↪</button>
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
  font-size: 16px;
  margin-left: 10px;
}
.table-wrap {
  max-height: 180px;
  overflow-y: scroll;
}
.khach-hang > p {
  width: 150px;
}
.khach-hang > input {
  width: 100%;
  outline: none;
  font-size: 16px;
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
  border: none;
  border-radius: 5px;
  background: #2fbd7e;
  color: #fff;
  cursor: pointer;
  padding: 0 15px;
  margin-left: 1rem;
  font-size: 20px;
  z-index: 0;
  transition: 0.3s;
  &:hover {
    background: #298a5e;
  }
}
.btn-wrap {
  margin-top: 3rem;
  margin-right: 1rem;
  position: absolute;
  right: 10px;
  display: flex;
  gap: 10px;
}
</style>
