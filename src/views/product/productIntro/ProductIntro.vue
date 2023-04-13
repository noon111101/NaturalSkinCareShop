<template>
  <div>
    <section class="container-fluid">
      <div class="icon-section d-flex justify-content-center">
        <div class="row">
          <div class="icon col col-sm">
            <a href="#"
              ><font-awesome-icon icon="fa-solid fa-earth-oceania" />Australian
              Made</a
            >
          </div>
          <div class="icon col col-sm">
            <a href="#"
              ><font-awesome-icon icon="fa-solid fa-earth-oceania" />Australian
              Made</a
            >
          </div>
          <div class="icon col col-sm">
            <a href="#"
              ><font-awesome-icon icon="fa-solid fa-earth-oceania" />Australian
              Made</a
            >
          </div>
          <div class="icon col col-sm">
            <a href="#"
              ><font-awesome-icon icon="fa-solid fa-earth-oceania" />Australian
              Made</a
            >
          </div>
          <div class="icon col col-sm">
            <a href="#"
              ><font-awesome-icon icon="fa-solid fa-earth-oceania" />Australian
              Made</a
            >
          </div>
          <div class="icon col col-sm">
            <a href="#"
              ><font-awesome-icon icon="fa-solid fa-earth-oceania" />Australian
              Made</a
            >
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid">
      <div class="d-flex justify-content-center mt-5 text-center">
        <div>
          <div></div>
          <h3
            style="
              line-height: 1.45;
              font-size: 1.875rem;
              font-weight: 300;
              letter-spacing: 0.5px;
            "
          >
            OUR NO LIST
          </h3>
          <p>
            At Sukin, we say NO to ingredients and processes that cause harm to
            ourselves and the environment we live in. It is our belief that
            everything we need to make the products you love can be found in
            nature.
          </p>
          <button>FIND OUT MORE</button>
        </div>

        <div>
          <div></div>
          <h3
            style="
              line-height: 1.45;
              font-size: 1.875rem;
              font-weight: 300;
              letter-spacing: 0.5px;
            "
          >
            WHY SHOPPING CRUELTY FREE IS IMPORTANT
          </h3>
          <p>
            If you’re familiar with Sukin Naturals, you probably know that being
            a socially responsible brand is very important to us. Part of that
            commitment is delivering great products that are both vegan and
            always cruelty-free.
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProductIntro",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
section {
  padding: 8px;
}
button {
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
button:hover {
  background-color: #206c49;
}
</style>
