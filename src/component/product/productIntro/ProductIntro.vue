<template>
  <div>
   <IndexIcons/>
   <PostProduct/>
  </div>
</template>

<script>
import IndexIcons from './IndexIcons.vue';
import PostProduct from './PostProduct.vue';

export default {
    name: "ProductIntro",
    data() {
        return {};
    },
    mounted() { },
    methods: {},
    components: { IndexIcons, PostProduct }
};
</script>

<style scoped>

</style>
