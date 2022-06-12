import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // component: HomeView,
      redirect: "/restaurant",
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/restaurant",
      name: "restaurant",
      component: () => import("../views/Restaurant.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // if (to.hash) {
    //   return {
    //     el: to.hash,
    //     behavior: "smooth",
    //     top: 100,
    //   };
    // }
  },
});

export default router;
