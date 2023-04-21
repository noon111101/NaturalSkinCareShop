<template>
  <div class="center text-center mt-5" style="width: 1248px;">
    <h2 class="mb-4 text-uppercase text-black fw-bold" role="heading" aria-level="3">Our Ranges</h2>
    <div class="d-flex flex-row">
      <div class="me-3 hover-range">
        <a href="/collections/signature" >
          <img src="//cdn.shopify.com/s/files/1/0081/7374/8305/files/Signature-Icon_500x500.png?v=1613561992" alt="Signature" class="wide block" role="presentation">
        </a>
      </div>
      <div class="me-3 hover-range">
        <a href="/collections/sensitive">
          <img src="//cdn.shopify.com/s/files/1/0081/7374/8305/files/Sensitive-Icon_500x500.png?v=1613561992" alt="Sensitive" class="wide block" role="presentation">
        </a>
      </div>
      <div class="me-3 hover-range">
        <a href="/collections/super-greens">
          <img src="//cdn.shopify.com/s/files/1/0081/7374/8305/files/Super-Greens-Icon_500x500.png?v=1613561992" alt="Super Greens" class="wide block" role="presentation">
        </a>
      </div >
      <div class="me-3 hover-range">
        <a href="/collections/oil-balancing" >
          <img src="//cdn.shopify.com/s/files/1/0081/7374/8305/files/Oil-Balancing-Icon_500x500.png?v=1613561992" alt="Oil Balancing" class="wide block" role="presentation">
        </a>
      </div>
      <div class="me-3 hover-range">
        <a href="/collections/sukin-for-men" >
         <img src="//cdn.shopify.com/s/files/1/0081/7374/8305/files/Mens-Icon_500x500.png?v=1613583452" alt="Mens" class="wide block" role="presentation">
        </a>
      </div>
      <div class="me-3 hover-range">
        <a href="/collections/rosehip-oil" >
          <img src="//cdn.shopify.com/s/files/1/0081/7374/8305/files/Rosehip-Icon_500x500.png?v=1613583452" alt="Rosehip" class="wide block" role="presentation">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionRanges"
}
</script>

<style >
a:hover {
  color: #206c49;
  text-decoration: underline;
}

.foreground--brand {
  color: #173f35;
}

.hover-range:hover{
  border: 5px solid #173f35;
  border-top: none;
  border-left: none;
  border-right: none;
}
</style>
