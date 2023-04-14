<template>
  <div>
    <h3 class="text-center text-uppercase fs-2 text-black fw-bold">Follow Sukin Naturals on Instagram</h3>

    <div class="py-4 bg-gradient wrapper-product-instagram" style="padding-left: 100px;padding-right: 100px">
      <VueSlickCarousel style="width: 100%;height: 80%;" v-bind="settings">
        <div v-for="(n,index) in postInstagram" :key="index">
          <ProductInstaBanner :data="n"/>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import VueSlickCarousel from "vue-slick-carousel";
import ProductInstaBanner from "@/views/product/productInstagram/ProductInstaBanner.vue";
export default {
  name: "ProductInstagram",
  components: {ProductInstaBanner, VueSlickCarousel },
  data(){
    return{
      settings: {
        "arrows": false,
        "dots": false,
        "infinite": true,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "autoplay": true,
        "speed": 2000,
        "autoplaySpeed": 2000,
        "cssEase": "linear",
        "centerMode": true,
        "centerPadding": "450px",
        "focusOnSelect": true,
      },
      postInstagram:[
        {
          caption :'Sukin wellness check! ✔Lit candle ✔A good book ✔Sukin skincare What’s in your wellness ritual? Tell us in the comments! #sukin #sukinskincare #sensitiveskin #wellness #wellnessroutine',
          time: 'April 12, 2023',
          imgUrl :'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Instagram%2F1.jpg?alt=media&token=e83aa852-ef79-4e12-ac41-d01ad1f9062a',
          link:'https://www.instagram.com/p/Cq8FUizuHrb/'
        },
        {
          caption :'Mood: Proud to be Australian born and Australian inspired. #sukin #sukinskincare #australia #australianskincare #australianinspired #australianborn',
          time: 'April 11, 2023',
          imgUrl :'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Instagram%2F2.jpg?alt=media&token=566cee1a-dcdd-4538-abdd-9fe006b9eb6a',
          link:'https://www.instagram.com/p/Cq5nhrIME0f/'
        },
        {
          caption :'Wake up to glowing skin. The easiest way to get there? Use a night cream as your skin repairs itself while you sleep. Drop a 🌙 if you want to try our Sensitive Calming Night Cream for natural, soothing hydration. #sukin #sukinskincare #glowyskin #sensitiveskin #sensitiveskincare',
          time: 'April 10, 2023',
          imgUrl :'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Instagram%2F3.jpg?alt=media&token=3fd01786-138b-4dff-b4e9-c0b0879e4e60',
          link:'https://www.instagram.com/p/Cq3GSpdugef/'
        },
        {
          caption :'Did you know that 60–70% of women and 50–60% of men report having some degree of sensitive skin? 🤔 Not sure where you stand? Use this guide to find out. #sukin #sukinskincare #sensitiveskin #sensitiveskinguide #skincareguide',
          time: 'April 6, 2023',
          imgUrl :'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Instagram%2F4.jpg?alt=media&token=5f5e4431-8db0-4df5-9ea9-f23a45df9036',
          link:'https://www.instagram.com/p/Cqsq32gsiE7/'
        },
        {
          caption :'The 🔑 to lowering your likelihood of a reaction to skincare? Choose products formulated without essential oils. Our Sensitive Skin collection is made with Vitamin E, Cocoa & Shea Butters, and antioxidant-rich Rosehip, Sesame, and Jojoba Oils to help restore moisture and leave skin soothed. #sukin #sukinskincare #sensitiveskin #sensitiveskincare #moisturizer',
          time: 'April 4, 2023',
          imgUrl :'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Instagram%2F5.jpg?alt=media&token=497ec387-f0e8-4f91-b654-cf08e161fcd2',
          link:'https://www.instagram.com/p/CqoNYClO2va/'
        },
        {
          caption :'Calm on. 🙏 Our Sensitive Skin collection features three nourishing ingredients to soothe your dry skin:✅ Chamomile✅ Aloe Vera✅ CucumberTag someone who deserves a little skincare TLC.#sukin #sukinskincare #sensitiveskin #sensitiveskincare #dryskin',
          time: 'April 3, 2023',
          imgUrl :'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Instagram%2F6.jpg?alt=media&token=46fa6451-bf7b-4268-86f6-ebfef08a3c15',
          link:'https://www.instagram.com/p/Cqlpo8ouy0b/'
        }
      ]
    }
  }

}
</script>
<style scoped>

</style>
