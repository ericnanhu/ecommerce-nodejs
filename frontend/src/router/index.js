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
      path: "/register",
      name: "Register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/product",
      name: "Product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/shop",
      name: "Shop",
      component: () => import("../views/ShopView.vue"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/checkout",
      name: "CheckOut",
      component: () => import("../views/CheckOutView.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/UserProfileView.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../views/seller/DashboardView.vue"),
      children: [
        {
          path: "",
          name: "DashboardHome",
          component: () => import("../views/seller/HomeView.vue"),
        },
        {
          path: "product/:productID",
          name: "ProductDetail",
          component: () => import("../views/seller/ProductDetailView.vue"),
        },
      ],
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("../views/admin/AdminView.vue"),
      children: [
        {
          path: "",
          name: "AdminHome",
          component: () => import("../views/admin/HomeView.vue"),
        },
        {
          path: "role",
          name: "AdminRoleManage",
          component: () => import("../views/admin/RoleManage.vue"),
        },
        {
          path: "user",
          name: "AdminUserManage",
          component: () => import("../views/admin/UserManage.vue"),
        },
        {
          path: "shop",
          name: "AdminShopManage",
          component: () => import("../views/admin/ShopManage.vue"),
        },
        {
          path: "product",
          name: "AdminProductManage",
          component: () => import("../views/admin/ProductManage.vue"),
        },
        {
          path: "review",
          name: "AdminReviewManage",
          component: () => import("../views/admin/ReviewManage.vue"),
        },
      ],
    },
  ],
});

export default router;
