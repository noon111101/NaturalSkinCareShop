import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "",
      component: () => import("./views/home/Home.vue"),
    },
    {
      path: "/collections",
      component: () => import("./views/collection/index.vue"),
    },

    {
      path: "/test",
      component: () => import("./views/test.vue"),
    },

  ]});

export default router;
