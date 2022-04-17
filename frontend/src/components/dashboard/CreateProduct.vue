<script>
import axios from "axios";

export default {
  props: {
    shopID: String,
  },

  data() {
    return {
      productCategories: [],
      newProduct: {
        name: "",
        images: [],
        price: "",
        description: "",
        categories: [],
      },
    };
  },

  async created() {
    try {
      // Get all categories.
      const categories = await axios({
        baseURL: import.meta.env.VITE_BACKENDURL,
        method: "get",
        url: "/main/category/all",
      });

      this.productCategories = categories.data;
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async createProduct() {
      try {
        const formData = new FormData();

        formData.append("name", this.newProduct.name);
        formData.append("price", this.newProduct.price);
        formData.append("description", this.newProduct.description);
        formData.append("categories", this.newProduct.categories);

        for (const i of Object.keys(this.newProduct.images)) {
          formData.append("images", this.newProduct.images[i]);
        }

        await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "post",
          url: "/seller/product/create",
          params: {
            shopID: this.shopID,
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
      this.newProduct.images = event.target.files;
    },

    onChangeCategorySelect(event) {
      this.newProduct.categories = [];
      const options = event.target.options;

      for (let i = 0; i < options.length; i++) {
        if (options[i].selected == true) {
          this.newProduct.categories.push(options[i].value);
        }
      }
    },
  },
};
</script>

<template>
  <label for="createProduct" class="btn btn-primary">New Product</label>
  <input type="checkbox" id="createProduct" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <label
        for="createProduct"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="font-bold text-lg">Create Product</h3>
      <div class="divider"></div>
      <form
        action="POST"
        class="flex flex-col space-y-8"
        @submit.prevent="createProduct()"
      >
        <div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
                v-model="this.newProduct.name"
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full"
                v-model="this.newProduct.price"
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
            <div class="form-control w-full col-span-2">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea
                class="textarea textarea-bordered"
                placeholder="Type Here"
                v-model="this.newProduct.description"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="modal-action">
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
