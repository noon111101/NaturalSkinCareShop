<template>

  <el-carousel style="padding: 0; margin: 0;" indicator-position="outside" height="900px">
    <el-carousel-item v-for=" (item,index)  in data" :key="index" >
        <img style="width: 100%" :src="item.url" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "CarouselHome",

  data() {
    return {
        data: [
            {
                url :'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Slide-banner%2F72_Hours_of_Hydration.jpg?alt=media&token=a2a160ad-d608-4e86-baf3-5b50bc3c0230'
            },
            {
                url : 'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Slide-banner%2FCreamy_Cucumber_Lemon.jpg?alt=media&token=ced4057e-2be2-45eb-b591-7568cd3d7268'
            },
            {
                url : 'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Slide-banner%2FDesktop_Natural_Balance.jpg?alt=media&token=291e61ae-cd58-451d-8029-6ee2a2e23b98'
            }
        ]
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>
