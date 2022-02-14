<template>
<div>
  <h1>hello Pro Products {{name}}</h1>
  <button @click="$emit('proEmit')">
    tap me
  </button>
</div>
</template>

<script>
export default {
  props:{
    name:String,
  },
}
</script>

<style scoped>

</style>