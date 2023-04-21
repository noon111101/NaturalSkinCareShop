<template>
  <div class="position-relative">
    <div class="position-relative">
    <img :src="bestSellerBackground" style="width: 100%;height: 340px">
    <div  class="overlay overlay_2"></div>
    </div>
    <div class="position-absolute top-50 start-50 translate-middle"
         style="margin-top: 220px"
    >
      <h3 class="text-center text-uppercase text-white mb-5"
          style="letter-spacing: 6.7px;line-height: 1.92"
      >
        our bestsellers</h3>
      <div class="d-flex flex-row " style="width: 1248px" >
        <div v-for="(n,index) in bestSeller" :key="index" >
          <router-link to="/product">
            <ProductBanner :data="n"/>
          </router-link>
        </div>
      </div>
      <div class="text-center mt-4">
        <a href="/collections/best-sellers" class="button secondary text-uppercase" title="See all" aria-label="See all">See all</a>
      </div>
    </div>
    <div/>
  </div>
</template>

<script>
import ProductBanner from "@/component/product/productBestSeller/productBanner/ProductBanner.vue";

export default {
  name: "ProductBseller",
  components: {ProductBanner},
  data() {
    return {
      bestSellerBackground: 'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FBest-Sellers-Background.jpg?alt=media&token=d8ccb846-ae55-474c-bb19-fae06aa22b1c',
      bestSeller: [
        {
          name: 'hydrating body lotion',
          type: 'signature',
          price: '$8.39',
          vote: 5,
          review: 127,
          img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FSignature_Hydrating_Body_Lotion.jpg?alt=media&token=433d407b-8d52-4118-b0cc-77ad403d40b7',
            'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FHydrating-Body-Lotion-before.jpg?alt=media&token=06e908b8-53c0-4007-9865-bc7ceb55152a'
          ]
        },
        {
          name: 'Hydrating Replenishing Mask Treatment',
          type: 'Hair Care',
          price: '$15.99',
          vote: 4.5,
          review: 66,
          img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FHydrating_Replenishing_Hair_Masque.jpg?alt=media&token=0d097c0c-c0a9-4c84-b9ad-75581e9e4d4e',
            'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2Fnew-hair-treatment-before.jpg?alt=media&token=0aa00a49-14ad-491e-bd4f-a67c4baf89c7'
          ]
        },
        {
          name: 'Hydrating Conditioner',
          type: 'Hair Care',
          price: '$18.99',
          vote: 4.5,
          review: 137,
          img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FMasterbrand_Hydrating_Conditioner.jpg?alt=media&token=881194df-5362-40db-8953-a721f35d0ed0',
            'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FNO_Lists_for_Site-SIG-before.jpg?alt=media&token=3ecb32a1-0b38-419d-a2ee-78e62fa6a6d0'
          ]
        },
        {
          name: 'Natural Balance Conditioner',
          type: 'Hair Care',
          price: '$18.99',
          vote: 4.5,
          review: 77,
          img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FNatural_Balance_Conditioner.jpg?alt=media&token=2ba4bde0-4b41-4702-a0b9-ffcbcc7a2183',
            'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2Fsukinskincare.jpg?alt=media&token=3f4aa237-bfc0-4d10-98a1-a4d392a0e3bf'
          ]
        },


      ]
    };
  },

  mounted() {
  },

  methods: {},
}
</script>

<style scoped>

a{
  cursor: pointer;
  text-decoration: none;
}

</style>
