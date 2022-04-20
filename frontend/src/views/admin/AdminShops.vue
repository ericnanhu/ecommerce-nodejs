<script>
import axios from "axios";
import ShowShop from "@/components/admin/ShowShop.vue";

export default {
  components: { ShowShop },

  data() {
    return {
      shops: {},
    };
  },

  async created() {
    try {
      const shops = await axios({
        baseURL: import.meta.env.VITE_BACKENDURL,
        method: "get",
        url: "/admin/shop/list",
      });
      this.shops = shops.data;
      // console.log(this.shops);
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async deleteShop(shopID) {
      try {
        await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "delete",
          url: "/admin/shop/delete",
          params: {
            shopID: shopID,
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
  <main>
    <div class="w-full p-8">
      <div
        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between"
      >
        <h2 class="font-bold text-2xl">Shops</h2>
      </div>
      <div class="divider"></div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Logo</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover" v-for="(shop, key) in this.shops" :key="key">
              <td>{{ key + 1 }}</td>
              <td>
                <div class="avatar">
                  <div class="w-16 rounded">
                    <img :src="shop.logo" alt="shop profile" />
                  </div>
                </div>
              </td>
              <td>{{ shop.name }}</td>
              <td class="flex space-x-2">
                <label :for="'deleteShop' + key" class="btn btn-error"
                  >Delete</label
                >
                <ShowShop :shopID="shop._id" :shopKey="key"></ShowShop>
              </td>
              <input
                type="checkbox"
                :id="'deleteShop' + key"
                class="modal-toggle"
              />
              <div class="modal">
                <div class="modal-box relative">
                  <label
                    :for="'deleteShop' + key"
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                    >✕</label
                  >
                  <h3 class="font-bold text-lg">
                    Are you sure you want to delete this shop - "{{
                      shop.name
                    }}"?
                  </h3>
                  <div class="divider"></div>
                  <div class="flex space-x-4">
                    <button
                      @click="deleteShop(shop._id)"
                      class="btn btn-error btn-outline"
                    >
                      Delete
                    </button>
                    <label :for="'deleteShop' + key" class="btn btn-primary"
                      >Cancel</label
                    >
                  </div>
                </div>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
