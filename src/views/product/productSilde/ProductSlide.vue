<template>
  <div class="filter-type-product"
  :class="typeObject">
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
</template>

<script>
export default {
  name: "ProductSlide",

  data() {
    return {
      type:'signature',
      options: [ {
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
      ]
    };
  },
  computed :{
    typeObject(){
      console.log(this.type)
      // eslint-disable-next-line no-unused-vars
      return this.type
    }
  },
  mounted() {},

  methods: {},
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
