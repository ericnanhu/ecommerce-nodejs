<script>
import axios from "axios";

export default {
  props: {
    userID: String,
    shopID: String,
    hasShop: Boolean,
  },

  data() {
    return {
      shop: {
        name: "",
        logo: "",
        phone: "",
        email: "",
        description: "",
        address: {
          country: "",
          province: "",
          city: "",
          postCode: "",
          street: "",
        },
      },
      createShop: {
        name: "",
        logo: "",
        phone: "",
        email: "",
        description: "",
        address: {
          country: "",
          province: "",
          city: "",
          postCode: "",
          street: "",
        },
      },
      updateShop: {
        name: "",
        logo: "",
        phone: "",
        email: "",
        description: "",
        address: {
          country: "",
          province: "",
          city: "",
          postCode: "",
          street: "",
        },
      },
    };
  },

  async created() {
    try {
      // If user has a Shop
      if (this.hasShop) {
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
        this.updateShop = shop.data;
      }
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async createShopForm() {
      try {
        const formData = new FormData();

        formData.append("name", this.createShop.name);
        formData.append("logo", this.createShop.logo);
        formData.append("email", this.createShop.email);
        formData.append("phone", this.createShop.phone);
        formData.append("description", this.createShop.description);
        formData.append("country", this.createShop.address.country);
        formData.append("province", this.createShop.address.province);
        formData.append("city", this.createShop.address.city);
        formData.append("street", this.createShop.address.street);
        formData.append("postCode", this.createShop.address.postCode);

        await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "post",
          url: "/seller/shop/create",
          params: {
            userID: this.userID,
          },
          headers: { "Content-Type": "multipart/form-data" },
          data: formData,
        });

        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    },

    onChangeLogoUploadCreate(event) {
      this.createShop.logo = event.target.files[0];
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
        <h2 class="font-bold text-2xl flex flex-col space-y-4">My Shop</h2>
        <label v-if="hasShop == false" for="createShop" class="btn btn-primary"
          >Create New Shop</label
        >
      </div>

      <div class="divider"></div>
      <div class="overflow-x-auto" v-if="hasShop == true">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>Name</th>
              <th>Number of Products</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover">
              <td>{{ this.shop.name }}</td>
              <td v-if="this.shop.products">{{ this.shop.products.length }}</td>
              <td v-else>0</td>
              <td class="whitespace-normal">
                {{ this.shop.description }}
              </td>
              <td class="flex space-x-2">
                <button class="btn btn-outline btn-error">Delete</button>
                <label for="updateShop" class="btn">Update</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <input
      type="checkbox"
      id="createShop"
      class="modal-toggle"
      v-if="hasShop == false"
    />
    <div class="modal" v-if="hasShop == false">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="createShop"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Create Shop</h3>
        <div class="divider"></div>
        <form
          action="POST"
          class="flex flex-col space-y-8"
          @submit.prevent="createShopForm"
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
                  v-model="this.createShop.name"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.createShop.phone"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.createShop.email"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Logo</span>
                </label>
                <input
                  type="file"
                  placeholder="Type here"
                  class="input input-bordered w-full py-1.5"
                  @change="onChangeLogoUploadCreate($event)"
                />
              </div>
              <div class="form-control w-full col-span-2">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea
                  class="textarea textarea-bordered"
                  placeholder="Type Here"
                  v-model="this.createShop.description"
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <h4 class="font-bold text-base">Address:</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Street</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.createShop.address.street"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">City</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.createShop.address.city"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Province</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.createShop.address.province"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Country</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.createShop.address.country"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Post Code</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.createShop.address.postCode"
                />
              </div>
            </div>
          </div>

          <div class="modal-action">
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>

    <input type="checkbox" id="updateShop" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="updateShop"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Update Shop</h3>
        <div class="divider"></div>
        <form
          action="PUT"
          class="flex flex-col space-y-8"
          @submit.prevent="updateShopForm"
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
                  v-model="this.updateShop.name"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.updateShop.phone"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.updateShop.email"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Logo</span>
                </label>
                <input
                  type="file"
                  placeholder="Type here"
                  class="input input-bordered w-full py-1.5"
                  @change="onChangeLogoUploadUpdate($event)"
                />
              </div>
              <div class="form-control w-full col-span-2">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea
                  class="textarea textarea-bordered"
                  placeholder="Type Here"
                  v-model="this.updateShop.description"
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <h4 class="font-bold text-base">Address:</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Street</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.updateShop.address.street"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">City</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.updateShop.address.city"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Province</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.updateShop.address.province"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Country</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.updateShop.address.country"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Post Code</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.updateShop.address.postCode"
                />
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
