<template>
  <div class="row">
    <div class="component">
      <div class="title">
        <p style="width: 90%">PRODUCT INFO</p>
        <div class="icon" @click="changeState" style="width: 6%">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Plus"
          role="img"
          width="12"
          viewBox="0 0 15 16"
          class=""
          v-if="state"
        >
          <title>Plus</title>
          <desc>Plus Icon</desc>

          <g class="fill">
            <path d="M0 7h15v1.5H0z"></path>
            <path d="M8.25.25v15h-1.5v-15z"></path>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Minus"
          role="img"
          width="12"
          viewBox="0 0 15 16"
          class=""
          v-else
        >
          <title>Minus</title>
          <desc>Minus Icon</desc>

          <g class="fill">
            <path d="M0 7h15v1.5H0z"></path>
          </g>
        </svg>
        </div>
      </div>
      <div v-if="!state && index==cIndex" class="content">
        Perfect for a normal to oily skin type, our Facial Foaming Cleanser is a
        non-drying, gentle gel cleanser that purifies the skin, without
        stripping it of its natural oils. Not only does it work to remove
        makeup, daily dirt build up and excess oils, it also helps to soothe and
        tighten the skin with a natural blend of Chamomile, Aloe Vera, Green Tea
        and Witch Hazel- win! Evening Primrose and our favorite Rosehip Oil is
        also added, to provide light hydration, leaving your skin soft and
        touchable!
        <div class="size mt-3">Size: 4.23 fl oz / 125ml</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  emits: ['response'],
  props: {
    index: String,
    cIndex: String
  },
  data() {
    return {
        state: true,
    };
  },

  mounted() {},

  methods: {
    changeState(){
        this.state = !this.state;
        this.$emit('response', this.index);
        console.log(this.cIndex);
    }
  },
};
</script>

<style scoped>
.component .title{
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
    border-bottom: .7px solid black;
}
.component .title p{
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    /* padding: 20px; */
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 1;
    margin: 0;
    text-transform: uppercase;
    color: #2d2926;
    cursor: pointer;
}
.component .title p:hover{
    color: #173f35;
}
.title .icon svg{
    width: 20px;
    height: 100%;
}
.component .content{
    padding-top: 20px;
    font-weight: 400;
    text-align: justify;
    font-size: .9375rem;letter-spacing: .5px;line-height: 1.45;
    margin-bottom: 16px;
}
</style>
