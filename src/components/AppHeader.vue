<template>
  <nav class="bg-gradient-to-b from-pink-600 to-amber-300 p-2 ">
    <a class="cursor-pointer">
      <h3 class="font-bold text-3xl">
        <router-link class="mx-2" to="/home">Home</router-link>
        <router-link class="mx-2" to="/product">Product</router-link>
        <router-link class="mx-2" to="/pro">ProProducts</router-link>
        <!--  <router-link class="mx-2" to="/modal">-->
        <!--    <button @click="$emit('open-login-modal')" >Login </button>-->
        <!--  </router-link>-->
      </h3>
    </a>
  </nav>
</template>

<script>
export default {}

</script>

<style></style>