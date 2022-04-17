<script>
import axios from "axios";

export default {
  props: {
    shopID: String,
    shop: Object,
  },

  data() {
    return {
      updatedShop: this.shop,
    };
  },

  methods: {
    async updateShop() {
      try {
        const formData = new FormData();

        formData.append("name", this.updatedShop.name);
        formData.append("logo", this.updatedShop.logo);
        formData.append("email", this.updatedShop.email);
        formData.append("phone", this.updatedShop.phone);
        formData.append("description", this.updatedShop.description);
        formData.append("country", this.updatedShop.address.country);
        formData.append("province", this.updatedShop.address.province);
        formData.append("city", this.updatedShop.address.city);
        formData.append("street", this.updatedShop.address.street);
        formData.append("postCode", this.updatedShop.address.postCode);

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

    onChangeLogo(event) {
      this.createShop.logo = event.target.files[0];
    },
  },
};
</script>

<template>
  <label for="updateShop" class="btn btn-primary">Update Shop</label>
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
        action="POST"
        class="flex flex-col space-y-8"
        @submit.prevent="updateShop()"
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
                v-model="this.updatedShop.name"
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
                v-model="this.updatedShop.phone"
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
                v-model="this.updatedShop.email"
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
                @change="onChangeLogo($event)"
              />
            </div>
            <div class="form-control w-full col-span-2">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea
                class="textarea textarea-bordered"
                placeholder="Type Here"
                v-model="this.updatedShop.description"
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
                v-model="this.updatedShop.address.street"
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
                v-model="this.updatedShop.address.city"
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
                v-model="this.updatedShop.address.province"
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
                v-model="this.updatedShop.address.country"
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
                v-model="this.updatedShop.address.postCode"
              />
            </div>
          </div>
        </div>

        <div class="modal-action">
          <button class="btn btn-primary w-full" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
