<template>
  <section class="container-fluid row justify-content-md-center">
    <div class="col-2"></div>
    <div class="contents text-center col " v-for="(n,index) in data" :key="index">
      <div class="img-product">
          <img :src="n.imgUrl" alt="" srcset="" style="width: 100%; height: 580px;" />
        </div>
        <div class="mb-5" style="max-height: 70px;">
          <h3 class="text-uppercase py-4 fs-1 fw-bold text-black lh-1 align-self-center" >{{ n.title }}</h3>
        </div>
        <p class="px-4 mt-3 mb-4">{{ n.content }}</p>
        <button class="button view-more">{{ n.buttonContent }}</button>
      </div>
    <div class="col-2"></div>
  </section>
</template>

<script>
export default {
  name: "PostProduct",

  data() {
    return {
      data :[
        {
          imgUrl: "https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2Fsukin-no-list-shortened-final.jpg?alt=media&token=dc5cbca8-4c91-49f0-8fa6-89f0d2473eac",
          title: "Our NO List",
          content: "At Sukin, we say NO to ingredients and processes that cause harm to ourselves and the environment we live in. It is our belief that everything we need to make the products you love can be found in nature.",
          buttonContent: "Find out more"
        },
        {
          imgUrl: "https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FCruelty_Free.jpg?alt=media&token=217f1267-085d-46a7-bc97-0afab7d1bcdf",
          title: "Why Shopping Cruelty Free Is Important",
          content: "If you’re familiar with Sukin Naturals, you probably know that being a socially responsible brand is very important to us. Part of that commitment is delivering great products that are both vegan and always cruelty-free.",
          buttonContent: "read more"
        }
      ]
    };
  },

  mounted() {},

  methods: {

  },
};
</script>

<style scoped>

</style>
