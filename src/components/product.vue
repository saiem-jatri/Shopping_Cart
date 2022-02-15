<template>
  <div class="product">
    <img :src="image">
    <h3> {{ title }}</h3>
    <p>${{ price }}</p>
<!--    <slot></slot>-->
    <button class="btn" @click="$emit('product',title,price,id)">
      Add To Cart
    </button>

  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    title: String,
    image: String,
    price:{
      type:Number,
      required: true,
    },
    id:Number,
  },
}
</script>

<style scoped>
.product h3 {
  font-size: 0.8rem;
}

.product {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  grid-gap: 20px;
}

.product img {
  width: 30%;
  height: 200px;
}
.btn {
  width: 100%;
  background: #5936f4;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>