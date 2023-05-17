import Vue from "vue";
import Router from "vue-router";
import HomeRu from "@/views/HomeRu";
import AbautRu from "@/views/AbautRu";
import ErrorRu from "@/views/ErrorRu";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "homeRu",
      component: HomeRu,
    },
    {
      path: "/abautRu",
      name: "abautRu",
      component: AbautRu,
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },
    {
      path: "*",
      name: "errorru",
      component: ErrorRu,
    },
  ],
});
