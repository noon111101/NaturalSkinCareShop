<template>
  <div class="d-flex flex-column product-wrapper me-3"
       style="width: 284px;height: 405px"
  >
    <div class="img-wrapper mb-4 " style="width: 284px;height: 284px">
      <div class="position-relative">
        <img :src="data.img[0]" class="prod-img first-image position-absolute " style="width: 284px;height: 284px">
        <img :src="data.img[1]" class="prod-img second-image position-absolute" style="width: 284px;height: 284px">
      </div>
    </div>
    <div class="mb-4 px-2 text-uppercase " style="line-height: 1.45;font-size: .9375rem;
    letter-spacing: .5px;">
      <strong>{{ data.name }}</strong><strong class="ms-2 me-2">|</strong><strong>{{ data.type }}</strong>
    </div>
    <div class="mb-3 px-2 " style="color: #54585a;">
      <span style="font-size: .9375rem;
    letter-spacing: .5px;
    line-height: 1.45;">{{ data.price }}</span>
      <span class="float-end" style="    font-size: 0.75rem;">{{ data.review }} Reviews</span>
      <el-rate
          :colors="colors"
          :value="data.vote"
          class="float-end d-inline"
          disabled
      >
      </el-rate>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    data: Object
  },
  data() {
    return {
      colors: ['#99A9BF', '#F7BA2A', '#2a7050']
    };
  },

  mounted() {
  },

  methods: {},
}
</script>

<style scoped>
.product-wrapper {
  box-sizing: border-box;
  box-shadow: 0 0 #0003;
  transition: box-shadow .2s cubic-bezier(.12, .98, .33, .99);
}

div.product-wrapper:hover {
  box-shadow: 0 2px 4px #0003;
}

.prod-img.second-image {
  opacity: 0;
}
.prod-img{
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.img-wrapper:hover .product--image .prod-img.first-image {
  -webkit-opacity: 0;
  -moz-opacity: 0;
  opacity: 0;
}
.img-wrapper:hover .prod-img.second-image {
  -webkit-opacity: 1;
  -moz-opacity: 1;
  opacity: 1;
}
</style>
