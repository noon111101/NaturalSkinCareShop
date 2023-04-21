<template>
  <!-- <product-instagram/> -->
  <ProductCart />
  <!-- <div class="menu">
    <div
      class="tab"
      :class="{ active: activeTab === 0 }"
      @click="activateTab(0)"
    >
      Tab 1
    </div>
    <div
      class="tab"
      :class="{ active: activeTab === 1 }"
      @click="activateTab(1)"
    >
      Tab 2
    </div>
    <div
      class="tab"
      :class="{ active: activeTab === 2 }"
      @click="activateTab(2)"
    >
      Tab 3
    </div>
    <div class="tab-content">
      <div v-show="activeTab === 0">Content for Tab 1-</div>
      <div v-show="activeTab !== 0">Content for Tab 1+</div>
      <div v-show="activeTab === 1">Content for Tab 2-</div>
      <div v-show="activeTab !== 1">Content for Tab 2+</div>
      <div v-show="activeTab === 2">Content for Tab 3-</div>
      <div v-show="activeTab !== 2">Content for Tab 3+</div>

    </div>
  </div> -->
  <!-- <div @click.capture="(event) => {event.stopPropagation(); change(event);}" style="border: 1px solid black;">
    <h1 style="width: 10%; pointer-events: none;">abc</h1>
    <h2 style="width: 10%; pointer-events: none;">abc</h2>
    <h3 style="width: 10%; pointer-events: none;">abc</h3>
  </div> -->
    <!-- <IngredientSec /> -->
    <!-- <ReviewHead /> -->
    <!-- <FeedbackBox /> -->
</template>

<script>
import ProductCart from "@/component/ProductPage/ProductPromo/ProductCart.vue";
// import IngredientSec from '@/component/ProductPage/Ingredient/IngredientSec.vue';
// import FeedbackBox from '@/component/ProductPage/Review/feedbackBox.vue';
// import ReviewHead from '@/component/ProductPage/Review/reviewHead.vue';


export default {
  name: "testBefore",
  data() {
    return {
      activeTab: 0
    };
  },
  methods: {
    activateTab(index) {
      this.activeTab = index;
    },
    change(event){
      console.log(event.target.lastChild);
    }
  },
  components: { ProductCart },
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab {
  padding: 10px;
  margin: 10px;
  background-color: #eee;
  cursor: pointer;
}

.tab.active {
  background-color: #ccc;
}

.tab-content {
  margin-top: 20px;
}
</style>
