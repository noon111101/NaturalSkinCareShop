<template>
  <div id="app">
    <SidebarVue />
    <div class="container-fluid" style="padding: 0;">
      <router-view />
    </div>
    <StickyBottomRight/>
    <StickyBottomLeft/>
  </div>
</template>
<script>

import SidebarVue from './component/navbar/SidebarVue.vue';
import StickyBottomRight from "@/component/sticky/StickyBottomRight.vue";
import StickyBottomLeft from "@/component/sticky/StickyBottomLeft.vue";
export default {
  components:{StickyBottomLeft, StickyBottomRight,  SidebarVue },

  computed: {

  },
  methods: {

  }
};
</script>
<style scoped>
#app {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
