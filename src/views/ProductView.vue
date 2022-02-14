<template>
  <div class="grid">
    <product v-for="product in products"
             :key="product.id"
             :title="product.title"
             :image="product.image"
             :price="product.price"
             @product="emittedFromChild"/>
  </div>
</template>

<script>
import product from "../components/product.vue";
import axios from 'axios';

export default {
  components: {
    product
  },
  data() {
    return {
      products: []
    }
  },
  name: "HomeView",
  methods: {
    emittedFromChild(title) {
      console.log(title)
    }
  },
  mounted() {
    axios.get('https://fakestoreapi.com/products')
        .then(res => {
          this.products = res.data;
        }).catch(e => {
      console.log(e)
    })
  }
}
</script>

<style>


.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 20px;
}
</style>