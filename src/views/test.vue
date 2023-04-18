<template>
  <product-instagram/>
</template>

<script>
import ProductInstagram from "@/component/product/productInstagram/ProductInstagram.vue";

export default {
  name: "testBefore",
  data(){
    return{
      settings:{
        "centerMode": true,
        "centerPadding": "20px",
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 3,
        "speed": 500
      }
    }
  },
  components: {ProductInstagram }

}
</script>

<style scoped>


</style>
