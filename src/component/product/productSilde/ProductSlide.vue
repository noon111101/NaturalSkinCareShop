<template>
  <div class="wrapper">
    <div :class="typeObject"
         class="filter-type-product"
         style="padding-left: 20%;padding-right: 20%">
      <div class="px-3 py-3 ">
        <el-select v-model="type" placeholder="Select">
          <el-option
              v-for="(item,index) in options"
              :key="index"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <a href="/collections/signature" title="" aria-label="" class="button reversed float-end">Shop the range</a>
      </div>
    </div>
    <div class="px-5 py-4" style="background-color: #d4d5d4">
      <VueSlickCarousel style="width: 100%;height: 80%;" v-bind="settings">
        <template #prevArrow="arrowOption">
          <div class="custom-arrow">
            <svg aria-label="Previous" height="24" role="img" viewBox="0 0 15 24" xmlns="http://www.w3.org/2000/svg">
              <title>Previous</title>
              <desc>Previous icon</desc>
              <path class="fill" d="M14.82 2.82L12 0 0 12l12 12 2.82-2.82L5.66 12z"></path>
            </svg>
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="custom-arrow">
            <svg aria-label="Next" height="24" role="img" viewBox="0 0 15 24" xmlns="http://www.w3.org/2000/svg"><title>
              Next</title>
              <desc>Next icon</desc>
              <path class="fill" d="M.18 2.82L3 0l12 12L3 24 .18 21.18 9.34 12z"></path>
            </svg>
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
        <div v-for="(n,index) in bestSeller" :key="index">
          <ProductBanner :data="n"/>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import ProductBanner from "@/component/product/productBestSeller/productBanner/ProductBanner.vue";

export default {
  name: "ProductSlide",
  components: {ProductBanner, VueSlickCarousel},
  data() {
    return {
      type: 'signature',
      options: [{
        value: 'signature',
        label: 'Signature'
      }, {
        value: 'super-green',
        label: 'Super green'
      }, {
        value: 'rosehip',
        label: 'Rosehip'
      }, {
        value: 'sensitive',
        label: 'Sensitive'
      }, {
        value: 'oil-balancing',
        label: 'Oil balancing'
      }
      ],
      settings: {
        "centerMode": true,
        "centerPadding": "450px",
        "focusOnSelect": true,
        "infinite": false,
        "slidesToShow": 3,
        "speed": 500
      },
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
        }
      ]
    };
  },
  computed: {
    typeObject() {
      console.log(this.type)
      // eslint-disable-next-line no-unused-vars
      //change product
      if (this.type == 'super-green') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.bestSeller = [
          {
            name: 'Detoxifying Clay Mask',
            type: 'Super Greens',
            price: '$12.99',
            vote: 5,
            review: 94,
            img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F1.jpg?alt=media&token=d2bebc22-cd62-4912-b257-f928460e410e',
              'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F1-b.jpg?alt=media&token=ad8f83ce-24bb-4e97-b072-b8e2b27baf69'
            ]
          },
          {
            name: 'Detoxifying Facial Scrub',
            type: 'Super Greens',
            price: '$12.99',
            vote: 5,
            review: 131,
            img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F2.jpg?alt=media&token=32c8fef1-ea5e-44a2-8766-b203e07d6fc1',
              'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F2-b.jpg?alt=media&token=55b9d60b-ad91-4399-a223-4c956c0f4c0a'
            ]
          },
          {
            name: 'Nutrient Rich Facial Moisturizer',
            type: 'Super Greens',
            price: '$12.99',
            vote: 4.5,
            review: 114,
            img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F3.jpg?alt=media&token=ee19bd7d-62ee-433e-ba78-890771a1cd56',
              'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F3-b.jpg?alt=media&token=9c2e3220-a1cd-42c7-ba4f-5bea96c79ad9'
            ]
          },
          {
            name: 'Facial Recovery Serum',
            type: 'Super Greens',
            price: '$15.99',
            vote: 4.5,
            review: 116,
            img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F4.jpg?alt=media&token=81250951-727c-430b-873a-0ef1351f4112',
              'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F4-b.jpg?alt=media&token=7130a3c2-4e4e-4d5b-9a7d-f1b593bd4d96'
            ]
          },
          {
            name: 'Detoxifying Clay Mask',
            type: 'Super Greens',
            price: '$12.99',
            vote: 5,
            review: 94,
            img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F1.jpg?alt=media&token=d2bebc22-cd62-4912-b257-f928460e410e',
              'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F1-b.jpg?alt=media&token=ad8f83ce-24bb-4e97-b072-b8e2b27baf69'
            ]
          },
          {
            name: 'Detoxifying Facial Scrub',
            type: 'Super Greens',
            price: '$12.99',
            vote: 5,
            review: 131,
            img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F2.jpg?alt=media&token=32c8fef1-ea5e-44a2-8766-b203e07d6fc1',
              'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F2-b.jpg?alt=media&token=55b9d60b-ad91-4399-a223-4c956c0f4c0a'
            ]
          },
          {
            name: 'Nutrient Rich Facial Moisturizer',
            type: 'Super Greens',
            price: '$12.99',
            vote: 4.5,
            review: 114,
            img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F3.jpg?alt=media&token=ee19bd7d-62ee-433e-ba78-890771a1cd56',
              'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F3-b.jpg?alt=media&token=9c2e3220-a1cd-42c7-ba4f-5bea96c79ad9'
            ]
          },
          {
            name: 'Facial Recovery Serum',
            type: 'Super Greens',
            price: '$15.99',
            vote: 4.5,
            review: 116,
            img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F4.jpg?alt=media&token=81250951-727c-430b-873a-0ef1351f4112',
              'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/ListProduct%2FSUPER%20GREENS%2F4-b.jpg?alt=media&token=7130a3c2-4e4e-4d5b-9a7d-f1b593bd4d96'
            ]
          }
        ];
      }
      if (this.type == 'signature') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.bestSeller = [
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
          }
        ];
      }
      return this.type
    }
  },
  mounted() {
  },

  methods: {

  },
};
</script>

<style scoped>
.signature {
  background-color: #2a7050;
}

.super-green {
  background-color: #006b5b;
}

.rosehip {
  background-color: #ca3664;
}

.oil-balancing {
  background-color: #545759;
}

.sensitive {
  background-color: #da84b7;
}

</style>
