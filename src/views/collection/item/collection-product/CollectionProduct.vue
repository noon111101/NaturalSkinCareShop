<template>
  <div class="d-flex flex-column product-wrapper me-3 position-relative"
       style="width: 383px;height: 610px"
  >
    <div class="img-wrapper mb-4 " style="width: 383px;height: 383px">
      <div class="position-relative">
        <img :src="data.img[0]" class="prod-img first-image position-absolute " style="width: 383px;height: 383px">
        <img :src="data.img[1]" class="prod-img second-image position-absolute" style="width: 383px;height: 383px">
        <p class="label">new arrival</p>

      </div>
      <div class="card-invisible" style="height: 241px;" aria-hidden="false" data-acsb-hidden="false"></div>
    </div>
    <div class="card-content bg-white">
      <div class="mb-3 px-3 mt-3 text-uppercase foreground--text "
           style="line-height: 1.45;font-size: 1.25rem;letter-spacing: .6px;">
        <strong>{{ data.name }}</strong><strong class="ms-2 me-2">|</strong><strong>{{ data.type }}</strong>
      </div>
      <div class="mb-4 px-3 foreground--foreground font-size-small-p margin-bottom-2x hover-cotent "
           style="line-height: 1.45;font-size: 1.25rem;letter-spacing: .6px">
        <p>{{data.detail}}</p>
      </div>
      <div class="mb-2 px-3">
        <button class="margin-bottom-2x button secondary wide xsmall-medium--hide " style="width: 335px">
          <div class="button-group position-relative">
            <span class="child1 ">Add to Bag</span>
            <span class="float-end me-1">$9.99</span>
          </div>
        </button>
      </div>
      <div class="mb-3 px-3 " style="color: #54585a;">
        <el-rate
            :colors="colors"
            :value="data.vote"
            class=" d-inline"
            disabled
        >
        </el-rate>
        <span class="" style="font-size: 0.75rem;">{{ data.review }} Reviews</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionProduct",
  props: {
    data: Object
  },
  data(){
    return{
      colors: ['#99A9BF', '#F7BA2A', '#969492']
    }
  }
}
</script>

<style>
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
.product-wrapper:hover .product--image .prod-img.first-image {
  -webkit-opacity: 0;
  -moz-opacity: 0;
  opacity: 0;
}
.product-wrapper:hover .prod-img.second-image {
  -webkit-opacity: 1;
  -moz-opacity: 1;
  opacity: 1;
}
 .card-content {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
}
.hover-cotent{
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.2s ease-in;
}
.product-wrapper:hover .hover-cotent{
  max-height: 81px;
}
.product-wrapper:hover .el-rate__icon{
  color: #2d2926!important;
}
.product-wrapper:hover .button.secondary {
  border-color: #2d2926;
  background-color: #2d2926;
  color: #fff;
}
.child1{
  margin-right: 80px;
}
.child1:after{
  content: "";
  display: block;
  position: absolute;
  top: 8px;
  bottom: 9.6px;
  right: 20%;
  line-height: 1;
  border-left: 1px solid #2d2926;
  transition: border-left-color .2s cubic-bezier(.12,.98,.33,.99),background-color .2s cubic-bezier(.12,.98,.33,.99),color .2s cubic-bezier(.12,.98,.33,.99);
}
.product-wrapper:hover .child1:after {
  border-left-color: white;

}
</style>
