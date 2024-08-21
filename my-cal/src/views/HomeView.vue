<script>
// import Spitem from '@/components/Spitems/SpItem.vue'
import { database, ref, set, get } from '../firebase/config.js'

export default {
  components: {
    // Spitem // Đăng ký component để sử dụng trong template
  },
  data() {
    return {
      productData: [
        {
          khachHang: '',
          tenSp: '',
          sl: 0,
          gia: 0,
          thanhtien: 0,
          dvt: ''
        }
      ],
      khachHang: '',
      tongTien: 0
    }
  },
  methods: {
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
    calculateTotal(product) {
      product.thanhtien = product.sl * product.gia
    },
    updateTotalAmount() {
      this.totalAmount = this.productData.reduce((sum, product) => sum + product.thanhtien, 0)
    },
    validateData() {
      // Kiểm tra nếu trường khách hàng không rỗng
      if (!this.khachHang.trim()) {
        alert('Vui lòng nhập tên khách hàng.')
        return false
      }
      // Kiểm tra tất cả sản phẩm
      // for (const product of this.productData) {
      //   if (!product.tenSp.trim()) {
      //     alert('Vui lòng nhập tên sản phẩm.')
      //     return false
      //   }
      //   if (product.sl <= 0) {
      //     alert('Số lượng sản phẩm phải lớn hơn 0.')
      //     return false
      //   }
      //   if (product.gia <= 0) {
      //     alert('Giá sản phẩm phải lớn hơn 0.')
      //     return false
      //   }
      //   if (!product.dvt.trim()) {
      //     alert('Vui lòng chọn đơn vị tính.')
      //     return false
      //   }
      // }
      return true
    },
    getCurrentDateTime() {
      const now = new Date()
      const day = now.getDate().toString().padStart(2, '0')
      const month = (now.getMonth() + 1).toString().padStart(2, '0')
      const year = now.getFullYear()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      return `${day}/${month}/${year} ${hours}:${minutes}`
    },
    groupProductsByCustomer(data) {
      return data.reduce((result, item) => {
        const existingCustomer = result.find(
          (r) => r.khachHang === item.khachHang && r.ngay === item.ngay
        )
        if (existingCustomer) {
          existingCustomer.sanPham.push(item.sanPham)
        } else {
          result.push({
            ngay: item.ngay,
            khachHang: item.khachHang,
            sanPham: [item.sanPham]
          })
        }
        return result
      }, [])
    },
    exportToJSON() {
      if (this.validateData()) {
        const now = new Date()
        const ngay = now.toLocaleDateString('vi-VN').replace(/\//g, '_')

        const sanPhamData = this.productData.map((product) => ({
          dvt: product.dvt,
          gia: product.gia,
          sl: product.sl,
          thanhtien: product.thanhtien,
          tenSp: product.tenSp // Thêm tên sản phẩm để kiểm tra trùng lặp
        }))
        console.log('Update successful')
        const dataRef = ref(database, 'hoadon/' + ngay)

        get(dataRef)
          .then((snapshot) => {
            let currentIndex = 0
            let existingData = null
            console.log('Update successful get')
            if (snapshot.exists()) {
              snapshot.forEach((childSnapshot) => {
                const data = childSnapshot.val()
                if (data.khachHang === this.khachHang) {
                  existingData = data
                  currentIndex = childSnapshot.key
                }
              })
            }

            if (existingData) {
              sanPhamData.forEach((newProduct) => {
                const existingProductIndex = existingData.sanPham.findIndex(
                  (prod) => prod.tenSp === newProduct.tenSp && prod.dvt === newProduct.dvt
                )

                if (existingProductIndex !== -1) {
                  existingData.sanPham[existingProductIndex].sl += newProduct.sl
                  existingData.sanPham[existingProductIndex].thanhtien += newProduct.thanhtien
                } else {
                  existingData.sanPham.push(newProduct)
                }
              })

              existingData.tongTien += this.totalAmount

              const updateRef = ref(database, `hoadon/${ngay}/${currentIndex}`)
              set(updateRef, existingData)
                .then(() => {
                  console.log('Update successful')

                  alert('Dữ liệu đã được cập nhật thành công')
                })
                .catch((error) => {
                  alert('Lỗi khi cập nhật dữ liệu:', error)
                })
            } else {
              const newRecordRef = ref(database, `hoadon/${ngay}/${snapshot.size}`)
              const exportData = {
                khachHang: this.khachHang,
                ngay: this.getCurrentDateTime(),
                sanPham: sanPhamData,
                tongTien: this.totalAmount
              }

              set(newRecordRef, exportData)
                .then(() => {
                  alert('Dữ liệu đã được tạo mới thành công')
                })
                .catch((error) => {
                  alert('Lỗi khi tạo dữ liệu:', error)
                })
            }
          })
          .catch((error) => {
            alert('Lỗi khi lấy dữ liệu:', error)
          })

        // Tạo file JSON để tải về
        // const jsonData = JSON.stringify(exportData, null, 2)
        // const blob = new Blob([jsonData], { type: 'application/json' })
        // const url = URL.createObjectURL(blob)
        // const link = document.createElement('a')
        // link.href = url
        // link.download = `hoadon_${ngay}.json`
        // link.click()
        // URL.revokeObjectURL(url)
      }
    }
  },
  watch: {
    productData: {
      handler: 'updateTotalAmount',
      deep: true
    }
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
          <th>STT</th>
          <th>Tên SP</th>
          <th style="padding: 0px 10px; width: 35px">SL</th>
          <th style="padding: 0px 5px">ĐVT</th>
          <th style="padding: 0px 15px; width: 35px">Giá</th>
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
          <td>
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

    <p>Tổng tiền: {{ totalAmount }}</p>
    <!-- Hiển thị tổng tiền -->

    <button @click="addProduct">+</button>
    <button @click="exportToJSON">Xuất hóa đơn</button>
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
}
main {
  width: 100%;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.1rem;
}
/* Các nút bấm lên/xuống trong input number sẽ bị ẩn */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
  font-size: 1.1rem;
  border: none;
}
.ten-sp {
  width: 6.8rem;
}
.sl {
  width: 40px;
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
}

button {
  margin-top: 20px;
  margin-right: 10px;
  padding: 0.5rem 1rem;
}
</style>
