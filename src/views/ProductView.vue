<template>
  <div class="grid">
    <div class="box">
      <SelectedProduct v-for="cartProducts in cart"
               :key="cartProducts.id"
               :title="cartProducts.title"
               :price="cartProducts.price"
               :id="cartProducts.id"
               @delete="deleteId(cartProducts.id)"
               >
      </SelectedProduct>
    </div>
    <product v-for="product in products"
             :key="product.id"
             :title="product.title"
             :image="product.image"
             :price="product.price"
             :id="product.id"
             @product="emittedFromChild"
             >
      Good Products
    </product>
  </div>
</template>

<script>
import product from "../components/product.vue";
import SelectedProduct from "../components/SelectedProduct.vue";
import axios from 'axios';

export default {
  components: {
    product,
    SelectedProduct
  },
  data() {
    return {
      products: [],
      cart:[]
    }
  },
  name: "HomeView",
  props: {
    title: String,
    price:{
      type:Number,
      required: true,
    },
    id:Number,
  },
  methods: {
    emittedFromChild(title,price,id) {
      console.log(title)
      console.log(price)
      console.log(id)
      this.cart.push({title, price, id})
      // console.log(this.cart)
    },
    deleteId(id){
      console.log(id)
      this.cart = this.cart.filter(item => item.id !== id)
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
.box{
  width: 100%;
  height: 600px;
  border:2px solid black;
  box-shadow: 0px 10px 0px rgba(0,0,0,0.8);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 20px;
}
</style>