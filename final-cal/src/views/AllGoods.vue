<script>
import { ref, get, set } from 'firebase/database'
import { database } from '../firebase/config'

export default {
  data() {
    return {
      products: [],
      currentPage: 1,
      productsPerPage: 5, // Số sản phẩm trên mỗi trang
      selectedProduct: null
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.productsPerPage)
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.productsPerPage
      const end = start + this.productsPerPage
      return this.products.slice(start, end)
    }
  },
  methods: {
    fetchProducts() {
      const productsRef = ref(database, 'goods/')
      get(productsRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.products = Object.values(snapshot.val())
          } else {
            console.log('No data available')
          }
        })
        .catch((error) => {
          console.error('Error fetching products:', error)
        })
    },
    selectProduct(product) {
      this.selectedProduct = { ...product }
    },
    saveProduct() {
      console.log(this.selectedProduct)
      const goodData = {
        dvt: this.selectedProduct.dvt,
        gia: this.selectedProduct.gia,
        tenSp: this.selectedProduct.tenSp,
        tong_sl: this.selectedProduct.tong_sl
      }

      const goodsRef = ref(database, 'goods/')

      // Kiểm tra nếu sản phẩm đã tồn tại
      get(goodsRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const goods = snapshot.val()

            // Kiểm tra xem sản phẩm đã tồn tại chưa
            const existingProductIndex = goods.findIndex((item) => item.tenSp === goodData.tenSp)

            if (existingProductIndex !== -1) {
              // Sản phẩm đã tồn tại, thông báo cho người dùng
              alert('Sản phẩm đã tồn tại!')
            } else {
              // Sản phẩm chưa tồn tại, thêm mới vào danh sách
              const newIndex = goods.length // Xác định index mới cho sản phẩm mới
              const newProductRef = ref(database, `goods/${newIndex}`)

              // Sử dụng set() để thêm sản phẩm mới vào vị trí cụ thể
              set(newProductRef, goodData)
                .then(() => {
                  console.log('Sản phẩm đã được thêm thành công!')
                  this.resetForm()
                })
                .catch((error) => {
                  console.error('Lỗi khi thêm sản phẩm:', error)
                })
            }
          } else {
            // Nếu không có sản phẩm nào, tạo đối tượng mới với sản phẩm đầu tiên
            const newProductRef = ref(database, 'goods/0')
            set(newProductRef, goodData)
              .then(() => {
                console.log('Sản phẩm đầu tiên đã được thêm thành công!')
                this.resetForm()
              })
              .catch((error) => {
                console.error('Lỗi khi thêm sản phẩm đầu tiên:', error)
              })
          }
        })
        .catch((error) => {
          console.error('Lỗi khi kiểm tra sản phẩm:', error)
        })
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
    }
  },
  created() {
    this.fetchProducts()
  }
}
</script>

<template>
  <div>
    <div v-for="product in paginatedProducts" :key="product.tenSp" @click="selectProduct(product)">
      <p>{{ product.tenSp }} - {{ product.tong_sl }}/{{ product.dvt }} - {{ product.gia }}</p>
      <p>🖊</p>
    </div>

    <!-- Nút phân trang -->
    <div v-if="totalPages > 1">
      <button @click="prevPage" :disabled="currentPage === 1" style="rotate: 180deg">></button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">></button>
    </div>

    <!-- Thông tin chi tiết sản phẩm -->
    <div v-if="selectedProduct">
      <h2>Chi tiết sản phẩm</h2>
      <form @submit.prevent="saveProduct">
        <div class="form-group">
          <label for="editTenSp">Tên sản phẩm:</label>
          <input id="editTenSp" type="text" v-model="selectedProduct.tenSp" />
        </div>
        <div class="form-group">
          <label for="editTongSl">Tổng số lượng:</label>
          <input id="editTongSl" type="number" v-model="selectedProduct.tong_sl" />
        </div>
        <div class="form-group">
          <label for="editGia">Giá:</label>
          <input id="editGia" type="number" v-model="selectedProduct.gia" />
        </div>
        <div class="form-group">
          <label for="editDvt">Đơn vị tính:</label>
          <input id="editDvt" type="text" v-model="selectedProduct.dvt" />
        </div>
        <button type="submit">✔</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Style cho popup */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
}
.form-group {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 0px 20px;
  border: none;
  background-color: #00a6ed;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.6rem;
}
button[type='button'] {
  background-color: #ccc;
}
.add-btn-wrap {
  height: fit-content;
  margin-left: 16px;
}
.btn-group {
  display: flex;
  justify-content: end;
  gap: 10px;
}
</style>
