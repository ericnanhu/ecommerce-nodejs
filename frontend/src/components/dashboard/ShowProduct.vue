<script>
import axios from "axios";

export default {
  props: {
    productID: String,
    productKey: Number,
  },
  data() {
    return {
      product: {},
    };
  },

  methods: {
    async showProduct() {
      try {
        const product = await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "get",
          url: "/seller/product/show",
          params: {
            productID: this.productID,
          },
        });

        this.product = product.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <label
    :for="'showProduct' + this.productKey"
    class="btn btn-primary btn-outline"
    @click="showProduct()"
    >Show</label
  >
  <input
    type="checkbox"
    :id="'showProduct' + this.productKey"
    class="modal-toggle"
  />
  <div class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <label
        :for="'showProduct' + this.productKey"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="font-bold text-lg">{{ this.product.name }}</h3>
      <div class="divider"></div>

      <div>
        <div class="flex flex-col flex-wrap gap-4">
          <div class="whitespace-normal">{{ this.product.description }}</div>
          <div>
            <strong>Price: </strong><span>{{ this.product.price }}</span>
          </div>
          <div>
            <strong>Categories: </strong>
            <span v-for="(category, key) in this.product.categories" :key="key"
              >{{ category.name }},
            </span>
          </div>
          <div class="flex flex-wrap gap-4">
            <img
              v-for="(image, key) in this.product.images"
              :key="key"
              :src="image"
              :alt="key"
              class="w-48"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
