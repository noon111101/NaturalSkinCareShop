<template>
<div class="ooo-instagram-media" style="width: 224px;height: 224px">
  <a :href="data.link">
    <div class="position-relative">
      <img :src="data.imgUrl" style="width: 224px;height: 224px">
      <div class="ooo-instagram-media__overlay">
        <p class="ooo-instagram-media__caption overflow-hidden">{{data.caption}}</p>
        <time class="ooo-instagram-media__date" data-instagram-field="timestamp">{{data.time}}</time>
      </div>
    </div>

  </a>
</div>
</template>

<script>
export default {
  name: "ProductInstaBanner",
  props: {
    data: Object
  },
}
</script>

<style scoped>

</style>
