<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {},
      productCategories: [],
      updateProduct: {
        name: "",
        images: [],
        price: "",
        description: "",
        categories: [],
      },
    };
  },

  async created() {
    // Get the product with ID
    const product = await axios({
      baseURL: import.meta.env.VITE_BACKENDURL,
      method: "get",
      url: "/seller/product/show",
      params: {
        productID: this.$route.params.productID,
      },
    });

    this.product = product.data;
    this.updateProduct = product.data;

    console.log(this.product);

    // Get all product categories
    const categories = await axios({
      baseURL: import.meta.env.VITE_BACKENDURL,
      method: "get",
      url: "/main/category/all",
    });

    this.productCategories = categories.data;
  },

  methods: {
    async updateProductForm() {
      try {
        const formData = new FormData();

        formData.append("name", this.updateProduct.name);
        formData.append("price", this.updateProduct.price);
        formData.append("description", this.updateProduct.description);
        formData.append("categories", this.updateProduct.categories);

        for (const i of Object.keys(this.updateProduct.images)) {
          formData.append("images", this.updateProduct.images[i]);
        }

        await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "put",
          url: "/seller/product/update",
          params: {
            productID: this.product._id,
          },
          headers: { "Content-Type": "multipart/form-data" },
          data: formData,
        });

        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    },

    onChangeImageUpload(event) {
      this.updateProduct.images = event.target.files;
    },

    onChangeCategorySelect(event) {
      this.updateProduct.categories = [];
      const options = event.target.options;

      for (let i = 0; i < options.length; i++) {
        if (options[i].selected == true) {
          this.updateProduct.categories.push(options[i].value);
        }
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="rounded-md shadow-md w-full p-8">
      <div
        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between"
      >
        <h2 class="font-bold text-2xl">Product Information</h2>
        <label for="updateProduct" class="btn btn-primary modal-button"
          >Update</label
        >
      </div>
      <div class="divider"></div>
      <div class="flex flex-col space-y-4">
        <p>
          <span class="font-bold">Name:</span>
          <span>{{ this.product.name }}</span>
        </p>
        <p>
          <span class="font-bold">Price:</span>
          <span>{{ this.product.price }}</span>
        </p>
        <p>
          <span class="font-bold">Description:</span>
          <span>{{ this.product.description }}</span>
        </p>
        <div>
          <span class="font-bold">Categories:</span>
          <span v-for="(category, key) in this.product.categories" :key="key"
            >{{ category.name }},
          </span>
        </div>
        <div>
          <span class="font-bold">Images:</span>
          <div class="grid grid-cols-4">
            <div
              class="w-80 rounded-md"
              v-for="(image, key) in this.product.images"
              :key="key"
            >
              <img :src="image" :alt="'image-' + key" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <input type="checkbox" id="updateProduct" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="updateProduct"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Update Product Information</h3>
        <div class="divider"></div>
        <form
          action="POST"
          id="updateProductForm"
          @submit.prevent="updateProductForm"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
                v-model="this.updateProduct.name"
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
                v-model="this.updateProduct.price"
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
                v-model="this.updateProduct.description"
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Categories</span>
              </label>
              <select
                class="select select-bordered w-full h-20"
                @change="onChangeCategorySelect($event)"
                multiple
              >
                <option
                  v-for="(category, key) in this.productCategories"
                  :value="category._id"
                  :key="key"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Images</span>
              </label>
              <input
                type="file"
                placeholder="Type here"
                class="input input-bordered w-full py-1.5"
                @change="onChangeImageUpload($event)"
                multiple
              />
            </div>
          </div>

          <div class="modal-action">
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
