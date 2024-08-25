<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <div class="app-header">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
      <div class="header-wrapper">
        <!-- <nav> -->
        <RouterLink class="nav-link" to="/">Trang chủ</RouterLink>
        <RouterLink class="nav-link" to="/about">Thống kê</RouterLink>
        <RouterLink class="nav-link" to="/goods">Danh mục</RouterLink>
        <!-- </nav> -->
      </div>
    </div>
    <RouterView class="home-view" />
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  overflow: hidden;
}
.header-wrapper {
  float: right;
  width: fit-content;
}
.nav-link {
  margin-left: 10px;
}

/* header */
.app-header {
  max-height: fit-content;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

/* máy a thông */
@media screen and (max-width: 400px) {
}

/* iphone */
@media screen and (max-width: 375px) {
}
.container {
  margin: 5px 5px 5px 5px;
  position: relative;
  min-height: 100vh;
}
</style>
