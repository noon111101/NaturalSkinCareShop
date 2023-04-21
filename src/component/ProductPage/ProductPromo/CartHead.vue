<template>
  <div class="wrapper" style="width:100%">
    <div class="cart-intro text-start">
      <h1 class="title fw-bold text-break" style="width: 90%">Foaming Facial Cleanser Pump | Signature</h1>
      <p class="mt-2 fs-4">
        <span>{{ price || "$8.99"}}</span>
      </p>
    </div>
    <div class="cart-review">

      <div class="d-flex justify-content-start flex-row">
        <el-rate
          v-model="value"
          :colors="colors"
          class=""
          size="large"
          disabled
        >
        </el-rate>
        <span class="" style="font-size: 1rem"
          >176 Reviews</span >
      </div>

      <div class="stock mt-2 d-flex justify-content-between" style="padding-bottom: 20px;">
        <a href="/pages/customer-rewards" class="block font-size-small weight-bold margin-top-1x">You could earn 50 loyalty points</a>
        <p class="current-stock" style="color: #206c49; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 900;">In stock</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "CartHead",

  data() {
    return {
      value: 5,
      colors : ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
    };
  },

  mounted() {},

  methods: {},

  props: {
    price: String,
  },
};
</script>

<style scoped>
.stock{
  border-bottom:  .8px solid #979797;
}
.stock a{
  cursor: pointer;
  font-weight: 900;
}
.stock a:hover{
  color: #206c49 !important;
  text-decoration: underline !important;
}
</style>
