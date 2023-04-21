<template>
  <div class="container">
    <div class="row justify-content-md-center mt-3 ps-5">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>Natural Body Products</el-breadcrumb-item>
      </el-breadcrumb>
      <CollectionFilter/>
      <div class="d-flex flex-row mt-3" >
        <div v-for="index in 2" :key="index" >
          <a>
            <CollectionProduct :data="n"/>
          </a>
        </div>
        <CollectionPromo/>
      </div>
    </div>

  </div>

</template>

<script>
import CollectionProduct from "@/views/collection/item/collection-product/CollectionProduct.vue";
import CollectionPromo from "@/views/collection/item/collection-promo/CollectionPromo.vue";
import CollectionFilter from "@/views/collection/filter/CollectionFilter.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CollectionItem",
  components: {CollectionFilter, CollectionPromo, CollectionProduct},
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
