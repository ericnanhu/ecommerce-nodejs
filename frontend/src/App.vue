<script></script>

<template>
  <header
    class="flex flex-col justify-center py-4 mb-4 gap-2 border-b-2 md:flex-row md:justify-between"
  >
    <div class="flex justify-center md:justify-start md:basis-1/4">
      <h1 class="text-2xl font-bold">Node.js eCommerce</h1>
    </div>
    <div
      class="flex justify-center items-center gap-5 md:justify-end md:basis-3/4"
    >
      <router-link
        to="/"
        class="hover:underline hover:underline-offset-4 hover:text-primary"
        >Home</router-link
      >
      <router-link
        to="/register"
        class="hover:underline hover:underline-offset-4 hover:text-primary"
        >Register</router-link
      >
    </div>
  </header>

  <RouterView />

  <footer class="flex flex-col justify-center py-4 mt-4 gap-2 border-t-2">
    <div class="flex justify-center gap-3 text-4xl">
      <i
        class="fa-brands fa-instagram-square cursor-pointer hover:text-primary"
      ></i>
      <i
        class="fa-brands fa-facebook-square cursor-pointer hover:text-primary"
      ></i>
      <i
        class="fa-brands fa-twitter-square cursor-pointer hover:text-primary"
      ></i>
      <i
        class="fa-brands fa-pinterest-square cursor-pointer hover:text-primary"
      ></i>
      <i class="fa-brands fa-linkedin cursor-pointer hover:text-primary"></i>
    </div>
    <div class="flex flex-col justify-center items-center">
      <p>
        Created by
        <a href="#" class="underline hover:text-primary">Eric Hu</a>
      </p>
    </div>
  </footer>
</template>

<style></style>
