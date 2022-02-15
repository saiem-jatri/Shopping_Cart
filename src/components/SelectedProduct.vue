<template>
  <div >
    <div>
      <h3> {{ title }}</h3>
      <p>{{ id }}</p>
      <p>${{ price }}</p>
      <button class="btn" @click="$emit('delete',id)">
        Delete this
      </button>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      cart:[]
    }
  },
  name: "SelectedProduct",
  props: {
    title: String,
    price:{
      type:Number,
      required: true,
    },
    id:Number,
  },

}

</script>

<style scoped>
/*.box{*/
/*  width: 100%;*/
/*  height: 600px;*/
/*  border:2px solid black;*/
/*  box-shadow: 0px 10px 0px rgba(0,0,0,0.8);*/
/*}*/
</style>