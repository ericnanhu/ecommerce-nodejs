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

      // console.log(this.productCategories);
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async createProductForm() {
      try {
        const formData = new FormData();

        formData.append("name", this.createProduct.name);
        // formData.append("images", this.createProduct.images);
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

    onChangeImageUploadCreate(event) {
      this.createProduct.images = event.target.files;

      console.log(this.createProduct.images);
    },

    onChangeCategorySelectCreate(event) {
      console.log(event.target);
    },

    async updateShopForm() {
      try {
        const formData = new FormData();

        formData.append("name", this.updateShop.name);
        formData.append("logo", this.updateShop.logo);
        formData.append("email", this.updateShop.email);
        formData.append("phone", this.updateShop.phone);
        formData.append("description", this.updateShop.description);
        formData.append("country", this.updateShop.address.country);
        formData.append("province", this.updateShop.address.province);
        formData.append("city", this.updateShop.address.city);
        formData.append("street", this.updateShop.address.street);
        formData.append("postCode", this.updateShop.address.postCode);

        await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "put",
          url: "/seller/shop/update",
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

    onChangeLogoUploadUpdate(event) {
      this.updateShop.logo = event.target.files[0];
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
            <tr class="hover">
              <td>1</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>2</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>3</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>4</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>5</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>6</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>7</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>8</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>9</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
            <tr class="hover">
              <td>10</td>
              <td>Product Name</td>
              <td>$ 20</td>
              <td class="whitespace-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                veniam, reiciendis, aliquam nobis ipsa exercitationem cum
                aperiam itaque dolores explicabo, voluptates eos! Voluptatum sit
                delectus molestias fugit, adipisci dicta temporibus.
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateProduct" class="btn">Update</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="btn-group mx-auto my-10">
      <button class="btn btn-outline">«</button>
      <button class="btn btn-outline">1</button>
      <button class="btn btn-outline btn-active">2</button>
      <button class="btn btn-outline">3</button>
      <button class="btn btn-outline">4</button>
      <button class="btn btn-outline">»</button>
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
                  <span class="label-text">Price</span>
                </label>
                <select class="select select-bordered w-full max-w-xs" multiple>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
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
                  @change="onChangeImageUploadCreate($event)"
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

    <input type="checkbox" id="updateProduct" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="updateProduct"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Update Product</h3>
        <div class="divider"></div>
        <form action="POST">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 1</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 2</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 3</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 4</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 5</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 6</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Input 7</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
        </form>
        <div class="modal-action">
          <label for="my-modal" class="btn btn-primary">Yay!</label>
        </div>
      </div>
    </div>
  </div>
</template>
