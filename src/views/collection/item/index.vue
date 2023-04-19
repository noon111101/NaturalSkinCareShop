<template>
  <div class="container">
    <div class="row justify-content-md-center mt-3">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>Natural Body Products</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="filter-range mt-4">
      <button class="button medium secondary hover-alternate me-3">
        <span class="icon icon-filter">
      <svg xmlns="http://www.w3.org/2000/svg" aria-label="Filter" role="img" width="15" height="15" viewBox="0 0 13 13" class="" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
      <title>Filter</title>
      <desc>Filter Icon</desc>
          <path d="M.95 10.05v1.3h3.9v-1.3H.95zm0-7.8v1.3h6.5v-1.3H.95zm6.5 10.4v-1.3h5.2v-1.3h-5.2v-1.3h-1.3v3.9h1.3zm-3.9-7.8v1.3H.95v1.3h2.6v1.3h1.3v-3.9h-1.3zm9.1 2.6v-1.3h-6.5v1.3h6.5zm-3.9-2.6h1.3v-1.3h2.6v-1.3h-2.6V.95h-1.3v3.9z" class="fill"></path>
      </svg>
      <span class="icon-fallback-text" style="text-transform: none" >Filter</span>
  </span>
      </button>
      <button class="button medium secondary hover-alternate"><span class="icon icon-down">
        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Down" role="img" width="15" height="15" viewBox="0 0 14 9" class="" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
          <title>Sort by</title>
          <path d="M.04 1.73L1.101.67l6.663 6.663-1.06 1.06L.04 1.732zM12.36.67l1.061 1.06-6.663 6.664-1.06-1.06L12.36.67z" class="fill"></path>
        </svg>    <span class="icon-fallback-text">Sort by</span>
      </span>
      </button>
    </div>
    <div class="d-flex flex-row mt-5" >
      <div v-for="index in 2" :key="index" >
        <a>
          <CollectionProduct :data="n"/>
        </a>
      </div>
      <CollectionPromo/>
    </div>
  </div>

</template>

<script>
import CollectionProduct from "@/views/collection/item/collection-product/CollectionProduct.vue";
import CollectionPromo from "@/views/collection/item/collection-promo/CollectionPromo.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CollectionItem",
  components: {CollectionPromo, CollectionProduct},
  data(){
    return{
      n: {
          name: 'Hydrating Shampoo',
          type: 'Hair Care',
          price: '$9.99',
          detail :'Free from sulphates, silicones and the harsh chemicals that can dry out and strip your hair and scalp, our...',
          vote: 4.5,
          tag :'new arrival',
          review: 166,
          img: ['https://cdn.shopify.com/s/files/1/0081/7374/8305/products/Masterbrand_Hydrating_Shampoo_500ml_01_Product_large.jpg?v=1599504647',
            'https://cdn.shopify.com/s/files/1/0081/7374/8305/products/Masterbrand_Hydrating_Shampoo_500ml_Hydrating_Conditioner_500ml_OH_01_large.jpg?v=1599504648'
          ]
        }
    }
  }
}
</script>

<style>
.el-breadcrumb__inner.is-link {
   font-weight: unset;
   color: #606266;
}
.button.secondary:hover.hover-alternate .icon svg .fill{
  fill: white;
}
.button .icon svg {
  margin-right: 12px;
}
.button .icon  {
  line-height: 1;
}
.icon {
  vertical-align: middle;
  display: inline-block;
  line-height: 1%;
}
</style>
