<template>
  <div v-if="editingInvoice">
    <h2>Chỉnh sửa hóa đơn</h2>
    <p>
      <strong>Khách hàng: </strong>
      <input
        style="border: 1px solid gainsboro; border-radius: 4px"
        v-model="editingInvoice.khachHang"
        class="customer-input"
      />
    </p>
    <p><strong>Ngày:</strong> {{ editingInvoice.ngay }}</p>
    <table>
      <thead>
        <tr>
          <th>.</th>
          <th>Tên SP</th>
          <th>ĐVT</th>
          <th style="width: 35px !important">SL</th>
          <th style="width: 35px !important">Giá</th>
          <th>TT</th>
          <th>----</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in editingInvoice.sanPham" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <input
              style="width: 140px !important"
              v-model="product.tenSp"
              placeholder="Tên sản phẩm"
              class="tb-input"
            />
          </td>
          <td>
            <input
              v-model.number="product.dvt"
              type="text"
              style="width: 50px !important"
              class="tb-input small-input"
            />
          </td>
          <td>
            <input
              v-model.number="product.sl"
              type="number"
              style="width: 35px !important"
              @input="calculateTotal(product)"
              class="tb-input small-input"
            />
          </td>
          <td>
            <input
              style="width: 50px !important"
              v-model.number="product.gia"
              type="number"
              @input="calculateTotal(product)"
              class="tb-input small-input"
            />
          </td>
          <td>
            <input
              style="width: 55px !important"
              v-model.number="product.thanhtien"
              type="number"
              readonly
              class="tb-input small-input"
            />
          </td>
          <td><button @click="removeProduct(index)" class="action-button">Xóa</button></td>
        </tr>
      </tbody>
      <!-- thu về -->
      <thead>
        <tr style="width: 100px">
          Thu về
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in editingInvoice.thuVe" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <input
              style="width: 140px !important"
              v-model="product.tenSp"
              placeholder="Tên sản phẩm"
              class="tb-input"
            />
          </td>
          <td>
            <input
              v-model.number="product.dvt"
              type="text"
              style="width: 50px !important"
              class="tb-input small-input"
            />
          </td>
          <td>
            <input
              v-model.number="product.sl"
              type="number"
              style="width: 35px !important"
              @input="calculateTotal(product)"
              class="tb-input small-input"
            />
          </td>
          <td>
            <input
              style="width: 50px !important"
              v-model.number="product.gia"
              type="number"
              @input="calculateTotal(product)"
              class="tb-input small-input"
            />
          </td>
          <td>
            <input
              style="width: 55px !important"
              v-model.number="product.thanhtien"
              type="number"
              readonly
              class="tb-input small-input"
            />
          </td>
          <td><button @click="removeProduct(index)" class="action-button">Xóa</button></td>
        </tr>
      </tbody>
    </table>
    <p><strong>Tổng tiền:</strong> {{ editingInvoice.tongTien }}</p>
    <div class="actions">
      <button @click="addProduct" class="action-button">➕</button>
      <button @click="saveChanges" class="action-button">Lưu thay đổi</button>
      <button @click="cancelEdit" class="action-button">Hủy</button>
    </div>
  </div>
</template>

<script>
import { database, ref, get, set } from '../firebase/config.js'

export default {
  data() {
    return {
      invoices: [],
      editingInvoice: null,
      currentDate: new Date().toLocaleDateString('vi-VN').replace(/\//g, '_') // Ngày hiện tại theo định dạng đ-mm-YYYY
    }
  },
  methods: {
    fetchInvoice(id, selectedDate) {
      const invoiceRef = ref(database, `hoadon/${selectedDate}/${id}`)
      console.log('Đường dẫn đến dữ liệu:', invoiceRef.toString()) // Log đường dẫn để kiểm tra

      get(invoiceRef)
        .then((snapshot) => {
          console.log('Dữ liệu từ Firebase:', snapshot.val()) // Log dữ liệu từ Firebase
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
    saveChanges() {
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
    },
    cancelEdit() {
      this.$router.push({ name: 'about' }) // Quay lại trang danh sách hóa đơn
    },
    removeProduct(index) {
      this.editingInvoice.sanPham.splice(index, 1)
      this.updateTotalAmount() // Cập nhật tổng tiền khi xóa sản phẩm
    },
    addProduct() {
      this.editingInvoice.sanPham.push({
        tenSp: '',
        dvt: '',
        sl: 0,
        gia: 0,
        thanhtien: 0
      })
    },
    updateTotalAmount() {
      this.editingInvoice.tongTien =
        this.editingInvoice.sanPham.reduce((sum, product) => sum + product.thanhtien, 0) -
        this.editingInvoice.thuVe.reduce((sum, product) => sum + product.thanhtien, 0)
    },
    calculateTotal(product) {
      product.thanhtien = product.sl * product.gia
      this.updateTotalAmount() // Cập nhật tổng tiền khi thay đổi số lượng hoặc giá
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

<style scoped>
.customer-input,
.tb-input {
  font-size: 1rem;
  border: none;
  padding: 0.5rem;
  box-sizing: border-box;
  outline: none;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.1rem;
}

th,
td {
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: center;
}

.small-input {
  width: 100px; /* Giới hạn độ rộng của các input trong cột nhỏ */
  padding: 0.5rem 0px !important;
  outline: none;
}

.action-button {
  margin-left: 0.5rem;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.actions > button {
  padding: 5px 15px;
}
td {
  padding: 0;
}
</style>
