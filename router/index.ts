import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import IntroPage from "../views/IntroPage/IntroPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "FirstPage",
    component: IntroPage,
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main/Main.vue"),
  },
  {
    path: "/FirstPage",
    name: "FirstPage",
    component: () => import("../views/FirstPage/FirstPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
