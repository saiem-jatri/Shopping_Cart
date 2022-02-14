<template>
  <AppHeader/>
  <div id="body">
    <router-view></router-view>
  </div>
  <div id="footer">
    Footer
  </div>
</template>


<script>
import HomeView from './views/HomeView.vue'
import ProductView from "./views/ProductView.vue";
import AppHeader from "./components/AppHeader.vue";
import ProProducts from "./components/ProProducts.vue";

export default {
  components: {
    ProductView, AppHeader, HomeView , ProProducts
  },
}</script>
<style>

</style>
