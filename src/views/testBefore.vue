<template>
  <div class="position-relative">
    <img  src="https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FBest-Sellers-Background.jpg?alt=media&token=d8ccb846-ae55-474c-bb19-fae06aa22b1c" style="width: 100%;height: 340px">
    <div  class="overlay overlay_2">

    </div>
  </div>
</template>

<script>
export default {
  name: "testBefore"
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
