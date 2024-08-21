<script>
import Spitem from '@/components/Spitems/SpItem.vue';

export default {
  components: {
    Spitem // Đăng ký component để sử dụng trong template
  },
  data() {
    return {
      productData: {
        tenSp: 'asda',
        sl: 10,
        gia: 10,
        get thanhtien() {
          return this.sl * this.gia;
        }
      }
    };
  }
}
</script>
<template>
  <header>header</header>
  <main>
    <p>This is the home view</p>
    <Spitem :data="productData"/>
  </main>
</template>
