<script>
import axios from "axios";

export default {
  props: {
    shopID: String,
    shopKey: Number,
  },
  data() {
    return {
      shop: {},
      dataLoaded: false,
    };
  },

  methods: {
    async showShop() {
      try {
        const shop = await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "get",
          url: "/admin/shop/show",
          params: {
            shopID: this.shopID,
          },
        });

        this.shop = shop.data;
        this.dataLoaded = true;
        // console.log(this.shop);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <label
    :for="'showShop' + this.shopKey"
    class="btn btn-primary btn-outline"
    @click="showShop()"
    >Show</label
  >
  <input type="checkbox" :id="'showShop' + this.shopKey" class="modal-toggle" />
  <div class="modal" v-if="dataLoaded">
    <div class="modal-box w-11/12 max-w-5xl">
      <label
        :for="'showShop' + this.shopKey"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="font-bold text-lg">{{ this.shop.name }}</h3>
      <div class="divider"></div>

      <div>
        <div class="flex flex-col flex-wrap gap-4">
          <div class="whitespace-normal">{{ this.shop.description }}</div>
          <div>
            <strong>Email: </strong><span> {{ this.shop.email }}</span>
          </div>
          <div>
            <strong>Phone: </strong><span> {{ this.shop.phone }}</span>
          </div>
          <div>
            <strong>Address: </strong>
            <span> {{ this.shop.address.street }},</span>
            <span> {{ this.shop.address.city }},</span>
            <span> {{ this.shop.address.province }},</span>
            <span> {{ this.shop.address.country }},</span>
            <span> {{ this.shop.address.postCode }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
