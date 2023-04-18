<template>
<div>
  <CollectionBanner/>
  <CollectionItem/>
  <collection-ranges/>
  <JournalIntro />
  <OrderBars/>
  <EmailBars />
  <FooterLinks />
  <FooterIcons />
</div>
</template>

<script>
import CollectionBanner from "@/views/collection/banner/CollectionBanner.vue";
import CollectionItem from "@/views/collection/item/index.vue";
import CollectionRanges from "@/views/collection/ranges/CollectionRanges.vue";
import OrderBars from "../../component/orderBars/OrderBars.vue";
import EmailBars from "../../component/emailBars/EmailBars.vue";
import FooterIcons from "../../component/footer/FooterIcons/FooterIcons.vue";
import FooterLinks from "../../component/footer/FooterLinks/FooterLinks.vue";
import JournalIntro from "../../component/journalIntro/JournalIntro.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Collection",
  components: {CollectionRanges, CollectionItem, CollectionBanner, OrderBars, EmailBars, FooterIcons, FooterLinks, JournalIntro}
}
</script>

<style scoped>

</style>
