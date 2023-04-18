<template>
<div class="position-relative" >
  <div class="background-image overlay"/>
  <div class="text-center pb-5 position-relative" style=" width: 550px;margin-left: auto;margin-right: auto">
    <h1 class="text-uppercase lh-1" style="font-size: 3rem;letter-spacing: -1px;font-weight: 600;color: #2d2926">Natural Body Products</h1>
    <p class="mt-4">Body care without complication. We know that nature provides all we need to nourish our skin, so that’s what we put into our natural body range. No false promises, no harmful processes, just ingredients from nature that work.</p>
  </div>
</div>
</template>

<script>
export default {
  name: "CollectionBanner"
}
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.background-image {
  background-image:url('https://storage.googleapis.com/dtk-sukin-naturals-au/collection/Body%20-%20Header%20Image_1547084993042.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  background-color: #f4f3f0;
}
</style>
