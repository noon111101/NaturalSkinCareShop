<template>
  <div>
    <Carousel />
    <section class="text-center">
      <div style="width: 850px; margin: auto; text-align: center" class="mb-5">
        <h3
          style="
            line-height: 1.45;
            font-size: 1.875rem;
            font-weight: 300;
            letter-spacing: 0.5px;
          "
        >
          Natural and effective skincare that’s good for you, your wallet, and
          the environment too.
        </h3>
      </div>
      <a>
        <button class="p-3 green-button">READ OUR STORY</button>
      </a>
    </section>
    <ProductBseller style="margin-bottom: 500px" />
    <ProductSlide />
    <ProductIntro />
    <IconsIngredient class="mb-5"/>
    <JournalIntro />
    <OrderBars />
    <ProductInstagram class="mt-5"/>
    <EmailBars />
    <FooterLinks />
    <FooterIcons />
  </div>
</template>

<script>
import IconsIngredient from "../../component/ingredientIcons/IconsIngredient.vue";
import Carousel from "../../component/carousel/index.vue";
import OrderBars from "../../component/orderBars/OrderBars.vue";
import ProductIntro from "../../component/product/productIntro/ProductIntro.vue";
import ProductBseller from "@/component/product/productBestSeller/ProductBseller.vue";
import ProductSlide from "@/component/product/productSilde/ProductSlide.vue";
import ProductInstagram from "@/component/product/productInstagram/ProductInstagram.vue";
import EmailBars from "../../component/emailBars/EmailBars.vue";
import FooterIcons from "../../component/footer/FooterIcons/FooterIcons.vue";
import FooterLinks from "../../component/footer/FooterLinks/FooterLinks.vue";
import JournalIntro from "../../component/journalIntro/JournalIntro.vue";

export default {
  name: "HomeBar",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { ProductSlide, ProductBseller, Carousel, ProductIntro, ProductInstagram, IconsIngredient, OrderBars, EmailBars, FooterIcons, FooterLinks, JournalIntro },
};
</script>

<style scoped>
section {
  padding: 80px;
}
.green-button {
  display: inline-block;
  max-width: 100%;
  /* padding: 16px; */
  height: 50px;
  /* line-height: 50px; */
  background-color: #173f35;
  border: 1px solid #173f35;
  color: #fff;
  border-radius: 0;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: border-color 0.2s cubic-bezier(0.12, 0.98, 0.33, 0.99),
    background-color 0.2s cubic-bezier(0.12, 0.98, 0.33, 0.99),
    color 0.2s cubic-bezier(0.12, 0.98, 0.33, 0.99);
}
.green-button:hover {
  background-color: #206c49;
  border-color: #206c49;
}

</style>
