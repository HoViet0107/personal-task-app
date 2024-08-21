<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="sp-item-wrapper">
    <p>Tên sản phẩm: {{ data.tenSp }}</p>
    <p>Số lượng: {{ data.sl }}</p>
    <p>Giá: {{ data.gia }}</p>
    <p>Thành tiền: {{ data.thanhtien }}</p>
  </div>
</template>

<style scoped>
</style>