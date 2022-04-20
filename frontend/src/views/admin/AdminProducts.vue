<script>
import axios from "axios";
import ShowProduct from "@/components/admin/ShowProduct.vue";

export default {
  components: { ShowProduct },

  data() {
    return {
      products: {},
    };
  },

  async created() {
    try {
      const products = await axios({
        baseURL: import.meta.env.VITE_BACKENDURL,
        method: "get",
        url: "/admin/product/list",
      });
      this.products = products.data;
      // console.log(this.products);
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async deleteProduct(productID) {
      try {
        await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "delete",
          url: "/admin/product/delete",
          params: {
            productID: productID,
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
        <h2 class="font-bold text-2xl">Products</h2>
      </div>
      <div class="divider"></div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="hover"
              v-for="(product, key) in this.products"
              :key="key"
            >
              <td>{{ key + 1 }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td class="flex space-x-2">
                <label :for="'deleteProduct' + key" class="btn btn-error"
                  >Delete</label
                >
                <ShowProduct
                  :productID="product._id"
                  :productKey="key"
                ></ShowProduct>
              </td>
              <input
                type="checkbox"
                :id="'deleteProduct' + key"
                class="modal-toggle"
              />
              <div class="modal">
                <div class="modal-box relative">
                  <label
                    :for="'deleteProduct' + key"
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                    >✕</label
                  >
                  <h3 class="font-bold text-lg">
                    Are you sure you want to delete this product - "{{
                      product.name
                    }}"?
                  </h3>
                  <div class="divider"></div>
                  <div class="flex space-x-4">
                    <button
                      @click="deleteProduct(product._id)"
                      class="btn btn-error btn-outline"
                    >
                      Delete
                    </button>
                    <label :for="'deleteProduct' + key" class="btn btn-primary"
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
