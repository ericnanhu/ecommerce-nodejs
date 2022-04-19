<script>
import axios from "axios";

export default {};
</script>

<template>
  <main class="grid grid-cols-4 gap-4">
    <menu class="col-span-1 h-screen static">
      <div
        class="tabs tabs-boxed flex-col content-center absolute top-30 w-1/5 rounded-md shadow-md"
      >
        <router-link
          to="/admin"
          class="tab tab-lg w-full"
          :class="{ 'tab-active': this.$route.name == 'AdminHome' }"
          >Home</router-link
        >
        <router-link
          to="/admin/roles"
          class="tab tab-lg w-full"
          :class="{ 'tab-active': this.$route.name == 'AdminRoles' }"
          >Roles</router-link
        >
        <!-- <router-link
          to="/admin/users"
          class="tab tab-lg w-full"
          :class="{ 'tab-active': this.$route.name == 'AdminUsers' }"
          >Users</router-link
        >
        <router-link
          to="/admin/shops"
          class="tab tab-lg w-full"
          :class="{ 'tab-active': this.$route.name == 'AdminShops' }"
          >Shops</router-link
        >
        <router-link
          to="/admin/products"
          class="tab tab-lg w-full"
          :class="{ 'tab-active': this.$route.name == 'AdminProducts' }"
          >Products</router-link
        >
        <router-link
          to="/admin/reviews"
          class="tab tab-lg w-full"
          :class="{ 'tab-active': this.$route.name == 'AdminReviews' }"
          >Reviews</router-link
        > -->
      </div>
    </menu>
    <router-view class="col-span-3 h-screen overflow-auto"></router-view>
  </main>
</template>
