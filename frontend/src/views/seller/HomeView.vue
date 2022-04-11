<script>
import axios from "axios";
import ShopComponent from "@/components/seller/ShopComponent.vue";
import ProductComponent from "@/components/seller/ProductComponent.vue";

export default {
  components: {
    ShopComponent,
    ProductComponent,
  },

  props: {
    userID: String,
  },

  data() {
    return {
      user: {
        hasShop: false,
        shopID: null,
      },
      dataLoaded: false,
    };
  },

  async created() {
    try {
      // Check if user has a shop
      const user = await axios({
        baseURL: import.meta.env.VITE_BACKENDURL,
        method: "get",
        url: "/user/show",
        params: {
          userID: this.userID,
        },
      });

      if (user.data.shop) {
        this.user.hasShop = true;
        this.user.shopID = user.data.shop;
      }

      this.dataLoaded = true;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<template>
  <main class="flex flex-col mx-2 md:mx-0">
    <ShopComponent
      v-if="this.dataLoaded"
      :userID="userID"
      :shopID="this.user.shopID"
      :hasShop="this.user.hasShop"
    />
    <ProductComponent
      v-if="this.user.hasShop == true && this.dataLoaded"
      :userID="userID"
      :shopID="this.user.shopID"
    />
  </main>
</template>
