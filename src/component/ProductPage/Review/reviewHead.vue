<template>
  <div class="wrapper mt-5">
    <div class="stars-rating d-flex justify-content-center">
      <span class="fs-3 fw-bold mx-2" style="color: silver">4.8</span>
      <el-rate
        v-model="value"
        disabled
        show-score
        size="larger"
        :colors="['#000', '#000', '#000']"
        score-template="{value} points"
        class="py-2"
      />
      <span class="py-2 mx-2">176 Reviews, 5 Q&amp;As</span>
    </div>
    <div class="feelins mt-2 pt-3 d-flex justify-content-center">
      <div class="feeling-rating d-flex me-3">
        <span>Feeling</span>
        <el-rate
          v-model="value1"
          :icon-classes="iconClasses"
          void-icon-class="'el-icon-minus'"
          :colors="['#000', '#000', '#000']"
          class="mx-1 py-1"
        >
        </el-rate>
      </div>
      <div class="feeling-rating d-flex">
        <span>Smell</span>
        <el-rate
          v-model="value1"
          :icon-classes="iconClasses"
          void-icon-class="'el-icon-minus'"
          :colors="['#000', '#000', '#000']"
          class="mx-1 py-1"
        >
        </el-rate>
      </div>
    </div>

    <div class="btns mt-5 d-flex justify-content-end">
      <button
        type="button"
        class="p-3"
        role="tab"
        aria-label="Click the button to write a review"
        aria-controls="write-review-tabpanel-main-widget"
        aria-expanded="false"
        style=""
      >
      <i class="el-icon-edit" style="float: left;"></i><span>Write A Review</span>
      </button>

      <button
        type="button"
        class="p-3 me-5 mx-2"
        role="tab"
        aria-label="Click the button to ask a question"
        aria-controls="write-question-tabpanel"
        aria-expanded="false"
      >
        <span
          class="yotpo-icon yotpo-icon-dialog write-question-review-button-icon yotpo-hidden-mobile"
        ></span>
        <span class="write-question-review-button-text font-color-gray-darker"
          >Ask A Question</span
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewHead",
  data() {
    return {
      value: 4.8,
      value1: 5,
      iconClasses: ['el-icon-minus', 'el-icon-minus','el-icon-minus'],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.btns button {
  background-color: transparent;
  border: 0.6px solid black;
  width: 15rem;
  border-radius: 8px;
}
.btns button:hover {
  border: 3px solid black;
  transition: border 0.5s;
}
.btns button span:last-child {
  width: 101px;
  height: 10px;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.71;
  letter-spacing: normal;
  text-align: center;
  color: #6b6d76;
}
</style>
