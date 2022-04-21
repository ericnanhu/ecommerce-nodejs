<script>
import axios from "axios";
import ProductGrid from "@/components/ProductGrid.vue";

export default {
  components: { ProductGrid },

  data() {
    return {
      shop: {},
      products: {},
      dataLoaded: false,
    };
  },

  async created() {
    try {
      const shop = await axios({
        baseURL: import.meta.env.VITE_BACKENDURL,
        method: "get",
        url: "main/shop/show",
        params: {
          shopID: this.$route.params.shopID,
        },
      });
      this.shop = shop.data;
      this.products = shop.data.products;

      console.table(this.shop);
      console.table(this.products);

      this.dataLoaded = true;
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    trimText(text = "", n = 20) {
      return text.substring(0, n) + "...";
    },
  },
};
</script>

<template>
  <main class="flex flex-col space-y-4 p-2 md:p-0">
    <!-- Shop Intro -->
    <div class="hero rounded-md shadow-md image-full">
      <figure>
        <img :src="this.shop.logo" :alt="this.shop.name" class="object-fill" />
      </figure>
      <div class="hero-overlay bg-opacity-60 rounded-md shadow-md"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-4xl">
          <h1 class="mb-5 text-5xl font-bold">{{ this.shop.name }}</h1>
          <p class="mb-5">
            {{ this.shop.description }}
          </p>
        </div>
      </div>
    </div>
    <!-- Recent Products -->
    <ProductGrid :products="this.products"></ProductGrid>
    <!-- <div class="btn-group mx-auto my-10">
      <button class="btn btn-outline">«</button>
      <button class="btn btn-outline">1</button>
      <button class="btn btn-outline btn-active">2</button>
      <button class="btn btn-outline">3</button>
      <button class="btn btn-outline">4</button>
      <button class="btn btn-outline">»</button>
    </div> -->
  </main>
</template>
