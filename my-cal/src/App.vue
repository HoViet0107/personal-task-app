<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper-big">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
      <div class="wrapper">
        <!-- <nav> -->
          <RouterLink class="nav-link left" to="/">Trang chủ</RouterLink>
          <RouterLink class="nav-link" to="/about">Thống kê</RouterLink>
        <!-- </nav> -->
      </div>
    </div>
    <HelloWorld msg="MyCalv!" />
  </header>

  <RouterView class="main" />
</template>

<style scoped>
header {
  /* line-height: 1.5; */
  max-height: fit-content;
}
.wrapper-big{
  display: flex;
  justify-content: space-between;
}
.wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left{
  margin-right: 1rem;
}
.nav-link {
  padding: 0.5rem 1rem;
}
.main{
  width: 100%;
}
</style>
