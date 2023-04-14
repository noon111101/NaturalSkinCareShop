<template>
  <div class="position-relative">
    <img  src="https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FBest-Sellers-Background.jpg?alt=media&token=d8ccb846-ae55-474c-bb19-fae06aa22b1c" style="width: 100%;height: 340px">
    <div  class="overlay overlay_2">

    </div>
    <div class="px-4 py-4">
      <VueSlickCarousel style="width: 80%;height: 80%"  v-bind="settings">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
        <div><h3>7</h3></div>
        <div><h3>8</h3></div>
      </VueSlickCarousel>
    </div>

  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: "testBefore",
  data(){
    return{
      settings:{
        "centerMode": true,
        "centerPadding": "20px",
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 3,
        "speed": 500
      }
    }
  },
  components: { VueSlickCarousel }

}
</script>

<style scoped>
.overlay {
  position: absolute;
  background: rgba(57, 57, 57, 0.5);

  /* center overlay text */
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay_2 {
  /*   top: 0;
    right: 0;
    left: 0;
    bottom: 0; */
  inset: 0;
}

</style>
