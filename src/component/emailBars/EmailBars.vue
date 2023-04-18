<template>
  <div>
    <div
      class="wrapper text-light text-uppercase d-flex flex-row justify-content-center align-items-center px-5 py-3"
      style="height: 124px; background-color: #173f35"
    >
      <div class="title me-5">
        <h4 class="content">STAY IN THE kNOw</h4>
      </div>

      <form method="post" action="/contact#contact_form" accept-charset="UTF-8">
        <input
          type="email"
          name="contact[email]"
          value=""
          placeholder="Enter your email"
          autocorrect="off"
          autocapitalize="off"
          required=""
        />
        <button
          onclick="ga('send', 'event', 'Newsletter Signups', 'https://sukinnaturals.com/', 'Subscribed');"
          type="submit"
          name="commit"
        >
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmailBars",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.title h4 {
  font-size: 1.4rem;
  letter-spacing: -0.4px;
  line-height: 1.1;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-style: inherit;
  margin-bottom: 0;
  text-transform: uppercase;
}
form {
  display: flex;
  flex-direction: row;
  width: 100%;
  width: 389px;
  height: 44px;
  align-items: stretch;
  border: 1px solid #979797;
  transition: border 0.2s cubic-bezier(0.12, 0.98, 0.33, 0.99);
  will-change: border;
}

form input {
  display: inline-block;
  flex-grow: 6;
  position: relative;
  height: 42px;
  border-color: transparent !important;
  background-color: transparent;
  color: inherit;
  padding: 0 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 1px;
  border-right: transparent;
  transition: border-color 0.2s cubic-bezier(0.12, 0.98, 0.33, 0.99),
    background-color 0.2s cubic-bezier(0.12, 0.98, 0.33, 0.99),
    color 0.2s cubic-bezier(0.12, 0.98, 0.33, 0.99);
}
form input:after {
  content: "";
  position: absolute;
  box-sizing: border-box;
  overflow: visible;
  vertical-align: middle;
  right: 0;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background-color: #979797;
  border-right: 10px solid #979797;
  /* transition: border .2s cubic-bezier(.12,.98,.33,.99); */
  /* will-change: border; */
}


form button {
  /* margin-left: 20px; */
  color: #f4f3f0;
  flex-grow: 4;
  border-color: transparent !important;
  background-color: transparent !important;
  margin-bottom: 0 !important;
  height: 42px;
  line-height: 1;
  background-color: transparent;
  color: #fff;
  border-radius: 0;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
  cursor: pointer;
}
</style>
