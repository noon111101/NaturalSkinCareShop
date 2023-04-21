<template>
  <div>
    <div class="product-page mt-4 mb-4 m-auto" >
      <Breadcrumb />
      <TemplateProduct />
      
    </div>
    <IngredientSec />
    <div class="product-page mt-4 mb-4 m-auto" style="height: 60rem">
      <FeedbackBox />
    </div>
    <ProductBseller />
    <JournalIntro style="margin-top: 30rem;"/>
    <EmailBars />
    <FooterLinks />
    <FooterIcons />
  </div>
</template>

<script>
import IngredientSec from "@/component/ProductPage/Ingredient/IngredientSec.vue";
import TemplateProduct from "@/component/ProductPage/ProductPromo/TemplateProduct.vue";
import FeedbackBox from "@/component/ProductPage/Review/feedbackBox.vue";
import Breadcrumb from "@/component/ProductPage/breadcrumbs/breadcrumb.vue";
import EmailBars from "@/component/emailBars/EmailBars.vue";
import FooterIcons from "@/component/footer/FooterIcons/FooterIcons.vue";
import FooterLinks from "@/component/footer/FooterLinks/FooterLinks.vue";
import JournalIntro from "@/component/journalIntro/JournalIntro.vue";
import ProductBseller from "@/component/product/productBestSeller/ProductBseller.vue";

export default {
  name: "ProductPage",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { Breadcrumb, TemplateProduct, FeedbackBox, IngredientSec, JournalIntro, EmailBars, FooterIcons, FooterLinks, ProductBseller },
};
</script>

<style scoped>
.product-page {
  padding-right: 10px;
  padding-left: 10px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 24px;
  width: 1248px;
}
</style>
