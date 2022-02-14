<template>
  <div class="product">
    <img :src="image">
    <h3> {{ title }}</h3>
    <p>{{ price }}</p>
    <button @click="$emit('product',title)">
      tap me
    </button>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    title: String,
    image: String,
    price: Number,
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
</style>