<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <RouterLink to="/admin/site">Site Management</RouterLink>
    <RouterLink to="/admin/user">User Management</RouterLink>
    <RouterLink to="/admin/category">Product Category Management</RouterLink>
    <RouterLink to="/admin/product">Product Management</RouterLink>
  </main>
</template>
