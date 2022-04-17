<script>
import axios from "axios";

export default {
  props: {
    userID: String,
    shopID: String,
  },

  data() {
    return {
      products: {},
      productCategories: [],
      createProduct: {
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
      // Get all products that belong to the shop.
      const shop = await axios({
        baseURL: import.meta.env.VITE_BACKENDURL,
        method: "get",
        url: "/seller/shop/show",
        params: {
          shopID: this.shopID,
          withProducts: true,
        },
      });

      this.products = shop.data.products;

      // Get all product categories
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
    async createProductForm() {
      try {
        const formData = new FormData();

        formData.append("name", this.createProduct.name);
        formData.append("price", this.createProduct.price);
        formData.append("description", this.createProduct.description);
        formData.append("categories", this.createProduct.categories);

        for (const i of Object.keys(this.createProduct.images)) {
          formData.append("images", this.createProduct.images[i]);
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
      this.createProduct.images = event.target.files;
    },

    onChangeCategorySelect(event) {
      this.createProduct.categories = [];
      const options = event.target.options;

      for (let i = 0; i < options.length; i++) {
        if (options[i].selected == true) {
          this.createProduct.categories.push(options[i].value);
        }
      }
    },

    async deleteProduct(productID) {
      try {
        await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "delete",
          url: "/seller/product/delete",
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
  <div>
    <div>
      <div class="flex space-x-4 items-center justify-between">
        <h2 class="font-bold text-2xl flex flex-col space-y-4">My Products</h2>
        <label for="createProduct" class="btn btn-primary"
          >Create New Product</label
        >
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
              <th>Description</th>
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
              <td>$ {{ product.price }}</td>
              <td class="whitespace-normal">
                {{ product.description }}
              </td>
              <td class="flex space-x-2">
                <label
                  :for="'deleteProduct' + key"
                  class="btn btn-outline btn-error"
                  >Delete</label
                >
                <router-link
                  :to="'/dashboard/product/' + product._id"
                  class="btn"
                  >Details</router-link
                >
              </td>

              <input
                type="checkbox"
                :id="'deleteProduct' + key"
                class="modal-toggle"
              />
              <div class="modal">
                <div class="modal-box w-1/2 max-w-5xl">
                  <label
                    :for="'deleteProduct' + key"
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                    >✕</label
                  >
                  <h3 class="font-bold text-lg">
                    Are you sure you want to delete this product -
                    {{ product.name }}?
                  </h3>
                  <div class="flex justify-center space-x-4">
                    <button
                      @click="deleteProduct(product._id)"
                      class="btn btn-outline btn-error"
                    >
                      Delete
                    </button>
                    <label for="'deleteProduct' + key" class="btn btn-primary"
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
          @submit.prevent="createProductForm"
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
                  v-model="this.createProduct.name"
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
                  v-model="this.createProduct.price"
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
                  v-model="this.createProduct.description"
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
  </div>
</template>
