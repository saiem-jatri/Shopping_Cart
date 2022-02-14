<template>
<ProProducts
  :name='name'
  @proEmit="proEmit"
/>
</template>

<script>
import ProProducts from '../components/ProProducts.vue';
export default {
  data(){
    return{
      name:saiem,
    }

  },
  components: {
    ProProducts
  },
  methods: {
    proEmit(){
      console.log("hey vue");
    }
  }
}
</script>

<style scoped>

</style>