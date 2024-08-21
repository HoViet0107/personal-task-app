<template>
  <div class="add-btn-wrap">
    <!-- Nút mở popup -->
    <button @click="openPopup">+</button>

    <!-- Popup hiển thị khi mở -->
    <div v-if="isOpen" class="popup-overlay">
      <div class="popup-content">
        <h2>Thêm sản phẩm mới</h2>
        <form @submit.prevent="saveProduct">
          <div class="form-group">
            <label for="tenSp">Tên sản phẩm:</label>
            <input v-model="product.tenSp" id="tenSp" type="text" required />
          </div>
          <div class="form-group">
            <label for="sl">Số lượng:</label>
            <input v-model.number="product.sl" id="sl" type="number" required />
          </div>
          <div class="form-group">
            <label for="gia">Giá:</label>
            <input v-model.number="product.gia" id="gia" type="number" required />
          </div>
          <div class="form-group">
            <label for="dvt">Đơn vị tính:</label>
            <input v-model="product.dvt" id="dvt" type="text" required />
          </div>
          <div class="form-group btn-group">
            <button type="button" @click="closePopup">✖</button>
            <button type="submit">✔</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false, // Trạng thái mở hoặc đóng của popup
      product: {
        tenSp: '',
        sl: 0,
        gia: 0,
        dvt: ''
      }
    }
  },
  methods: {
    openPopup() {
      this.isOpen = true
    },
    closePopup() {
      this.isOpen = false
    },
    saveProduct() {
      // Tính thành tiền
      this.product.thanhtien = this.product.sl * this.product.gia

      // Phát sự kiện để gửi dữ liệu sản phẩm lên component cha
      this.$emit('product-added', this.product)

      // Đóng popup và reset form
      this.closePopup()
      this.resetForm()
    },
    resetForm() {
      this.product = {
        tenSp: '',
        sl: 0,
        gia: 0,
        dvt: ''
      }
    }
  }
}
</script>

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
