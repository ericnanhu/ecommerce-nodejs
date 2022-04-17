<script>
import axios from "axios";
import UpdateShop from "@/components/dashboard/UpdateShop.vue";

export default {
  components: { UpdateShop },
  props: {
    userID: String,
    shopID: String,
  },

  data() {
    return {
      shop: {},
      dataLoaded: false,
    };
  },

  async created() {
    try {
      const shop = await axios({
        baseURL: import.meta.env.VITE_BACKENDURL,
        method: "get",
        url: "/seller/shop/show",
        params: {
          shopID: this.shopID,
          withProducts: false,
        },
      });

      this.shop = shop.data;

      this.dataLoaded = true;
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async deleteShop() {
      try {
        await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "delete",
          url: "/seller/shop/delete",
          params: {
            shopID: this.shopID,
          },
        });

        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <div
    class="flex flex-col space-y-4 mx-2 md:mx-0 items-center"
    v-if="this.dataLoaded"
  >
    <div class="avatar">
      <div
        class="w-24 sm:w-36 md:w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
      >
        <img :src="this.shop.logo" />
      </div>
    </div>
    <div>
      <p class="font-bold text-3xl">
        {{ this.shop.name }}
      </p>
    </div>
    <div class="rounded-md shadow-md w-full p-8 space-y-4">
      <div
        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between"
      >
        <h2 class="font-bold text-2xl">Shop Information</h2>
        <div class="space-x-4">
          <label for="deleteShop" class="btn btn-error">Delete Shop</label>
          <UpdateShop :shopID="this.shopID" :shop="this.shop"></UpdateShop>
        </div>
      </div>
      <div class="divider"></div>
      <p>
        {{ this.shop.description }}
      </p>
      <p>
        <span class="font-bold">Phone:</span>
        <span>{{ this.shop.phone }}</span>
      </p>
      <p>
        <span class="font-bold">Email:</span>
        <span>{{ this.shop.email }}</span>
      </p>
      <p>
        <span class="font-bold">Street:</span>
        <span>{{ this.shop.address.street }}</span>
      </p>
      <p>
        <span class="font-bold">City:</span>
        <span>{{ this.shop.address.city }}</span>
      </p>
      <p>
        <span class="font-bold">Province:</span>
        <span>{{ this.shop.address.province }}</span>
      </p>
      <p>
        <span class="font-bold">Country:</span>
        <span>{{ this.shop.address.country }}</span>
      </p>
      <p>
        <span class="font-bold">Post Code:</span>
        <span>{{ this.shop.address.postCode }}</span>
      </p>
    </div>

    <!-- Delete Shop Confirm -->
    <input type="checkbox" id="deleteShop" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label
          for="deleteShop"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="text-lg font-bold">
          Are You Sure You Want to Delete This Shop?
        </h3>
        <div class="divider"></div>
        <div class="flex space-x-4">
          <button class="btn btn-error btn-outline" @click="deleteShop()">
            Delete
          </button>
          <label for="deleteShop" class="btn btn-primary">Cancel</label>
        </div>
      </div>
    </div>
  </div>
</template>
