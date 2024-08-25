<script>
import { ref, get, set, remove } from 'firebase/database'
import { database } from '../firebase/config'

export default {
  data() {
    return {
      products: [],
      currentPage: 1,
      productsPerPage: 5, // Số sản phẩm trên mỗi trang
      selectedProduct: { tenSp: '', tong_sl: null, gia: null, dvt: '' }
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
            const data = []
            // Thêm từng sản phẩm từ sau ra trước vào mảng this.products
            snapshot.forEach((snap_item) => {
              const product = snap_item.val()
              product.id = snap_item.key

              data.unshift(product)
            })
            this.products = data
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
      if (
        this.selectedProduct.tenSp === '' ||
        this.selectedProduct.tong_sl === null ||
        this.selectedProduct.gia === null ||
        this.selectedProduct.dvt === ''
      ) {
        alert('Vui lòng nhập đầy đủ thông tin sản phẩm!')
        return
      }
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
            let isExist = false
            let id = null

            // Kiểm tra xem sản phẩm đã tồn tại chưa
            snapshot.forEach((snap_item) => {
              if (snap_item.val().tenSp === goodData.tenSp) {
                isExist = true
                id = snap_item.key
              }
            })

            if (!isExist) {
              // Sản phẩm chưa tồn tại, thêm mới vào danh sách
              const newIndex = goods.length // Xác định index mới cho sản phẩm mới
              const newProductRef = ref(database, `goods/${newIndex}`)

              // Sử dụng set() để thêm sản phẩm mới vào vị trí cụ thể
              set(newProductRef, goodData)
                .then(() => {
                  this.fetchProducts()
                })
                .catch((error) => {
                  alert('Lỗi khi thêm sản phẩm:', error)
                })
            } else {
              // cập nhật sản phẩm nếu thông tin bị thay đổi
              const updateRef = ref(database, `goods/${id}`)
              set(updateRef, goodData)
                .then(() => {
                  this.fetchProducts()
                })
                .catch((error) => {
                  console.error('Lỗi khi cập nhật san pham:', error)
                  alert('Lỗi khi cập nhật sản phẩm!')
                })
            }
          } else {
            // Nếu không có sản phẩm nào, tạo đối tượng mới với sản phẩm đầu tiên
            const newProductRef = ref(database, 'goods/0')
            set(newProductRef, goodData)
              .then(() => {
                console.log('Sản phẩm đầu tiên đã được thêm thành công!')
                // this.resetForm()
                this.fetchProducts()
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
    // Hàm xoá sản phẩm
    deleteProduct(product) {
      const deleteRef = ref(database, `goods/${product.id}`)

      remove(deleteRef)
        .then(() => {
          alert('Xóa sản phẩm thành công!')
          // this.fetchProducts() // Tải lại danh sách hóa đơn sau khi xóa
        })
        .catch((error) => {
          console.error('Lỗi khi xóa san pham:', error)
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
  <div class="container">
    <!-- Tìm kiếm sản phẩm theo tên, dvt, giá -->
    <div class="search"></div>
    <input type="text" placeholder="Tìm kiếm....Vd: tên, dvt, giá" />
  </div>

  <!-- Danh sách sản phẩm -->
  <div class="product-list" v-for="product in paginatedProducts" :key="product.tenSp">
    <p style="font-weight: 500" class="product-item" @click="selectProduct(product)">
      {{ product.tenSp }} - {{ product.tong_sl }}/{{ product.dvt }} -
      <span style="font-weight: 500">Giá:</span>
      {{ product.gia }}
    </p>
    <div class="action-button">
      <p class="goods-btn delete" @click="deleteProduct(product)">⌫</p>
    </div>
  </div>

  <!-- Nút phân trang -->
  <div class="pagination" v-if="totalPages > 1">
    <button @click="prevPage" :disabled="currentPage === 1" style="rotate: 180deg">></button>
    <span>{{ currentPage }} / {{ totalPages }} </span>
    <button @click="nextPage" :disabled="currentPage === totalPages">></button>
  </div>

  <!-- Thông tin chi tiết sản phẩm -->
  <div v-if="selectedProduct">
    <p class="bold">Chi tiết sản phẩm</p>
    <form @submit.prevent="saveProduct" class="form">
      <div class="form-group">
        <label class="form-title" for="editTenSp">Tên sản phẩm</label>
        <input id="editTenSp" type="text" v-model="selectedProduct.tenSp" />
      </div>
      <div class="form-group">
        <label class="form-title" for="editTongSl">Tổng số lượng</label>
        <input id="editTongSl" type="number" v-model="selectedProduct.tong_sl" />
      </div>
      <div class="form-group">
        <label class="form-title" for="editGia">Giá</label>
        <input id="editGia" type="number" v-model="selectedProduct.gia" />
      </div>
      <div class="form-group">
        <label class="form-title" for="editDvt">Đơn vị tính</label>
        <input id="editDvt" type="text" v-model="selectedProduct.dvt" />
      </div>
      <div class="button-group">
        <button type="reset" class="btn clear">↺</button>
        <button type="submit" class="btn">✔</button>
      </div>
    </form>
  </div>
  <!-- </div> -->
</template>

<style scoped>
.product-list,
.form-group,
.pagination,
.action-button,
.button-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product-list {
  margin-bottom: 10px;
  margin-top: 16px;
}
.product-item {
  width: 100%;
  padding: 3px 10px;
  border: 1px solid #2fbd7e;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  color: #298a5e;
  background-color: #fff;
  transition: all 0.3s ease;
  &:hover {
    background-color: #298a5e;
    color: #fff;
  }
}
.bold {
  font-weight: 900;
}

/* ẩn đi cái nút chỉnh lên xuống của input */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input {
  outline: none;
  padding: 3px 10px;
}

/* chỉnh sửa form */
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form-group {
  flex-direction: row;
  gap: 5px;
  width: 350px;
  margin: 0 auto;
}

/* phân trang */
.pagination {
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.pagination > button {
  font-size: 16px;
  background-color: #fff;
  color: #298a5e;
  border: 1px solid #298a5e;
  border-radius: 5px;
  padding: 2px 10px;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    background-color: #298a5e;
    color: #fff;
  }
}

/* các nút */
.action-button,
.button-group {
  justify-content: end;
  align-items: center;
  gap: 15px;
}
.goods-btn {
  background-color: #fff;
  color: #298a5e;
  border: 1px solid #298a5e;
  border-radius: 5px;
  padding: 3px 10px;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    background-color: #298a5e;
    color: #fff;
  }
}
.goods-btn.delete {
  color: #db1815;
  border: 1px solid #db1815;
  &:hover {
    background-color: #db1815;
    color: #fff;
  }
}
.button-group {
  gap: 30px;
}
.btn {
  font-size: 20px;
  background-color: #fff;
  color: #298a5e;
  border: 1px solid #298a5e;
  border-radius: 5px;
  padding: 4px 10px;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    background-color: #298a5e;
    color: #fff;
  }
}
.clear {
  background-color: #fff;
  color: #db1815;
  border: 1px solid #db1815;
  padding: 4px 10px;
  &:hover {
    background-color: #db1815;
    color: #fff;
  }
}
</style>
