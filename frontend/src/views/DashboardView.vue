<script>
import axios from "axios";

import CreateShop from "@/components/dashboard/CreateShop.vue";
import ShopComponent from "@/components/dashboard/ShopComponent.vue";
import ProductList from "@/components/dashboard/ProductList.vue";

export default {
  props: {
    userID: String,
  },

  components: { CreateShop, ShopComponent, ProductList },

  data() {
    return {
      hasShop: false,
      shopID: null,
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
        this.hasShop = true;
        this.shopID = user.data.shop;
      }

      this.dataLoaded = true;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<template>
  <CreateShop v-if="this.hasShop == false" :userID="this.userID"></CreateShop>
  <ShopComponent
    v-if="this.hasShop == true"
    :userID="this.userID"
    :shopID="this.shopID"
  ></ShopComponent>
  <ProductList
    v-if="this.hasShop == true"
    :userID="this.userID"
    :shopID="this.shopID"
  ></ProductList>
</template>
