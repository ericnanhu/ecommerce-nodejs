import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
      path: "/admin",
      name: "adminHome",
      component: () => import("../views/admin/AdminHomeView.vue"),
    },
    {
      path: "/admin/site",
      name: "adminSiteManagement",
      component: () => import("../views/admin/AdminSiteManagementView.vue"),
    },
  ],
});

export default router;
