<script>
import axios from "axios";

export default {
  props: {
    userID: String,
  },

  data() {
    return {
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
    };
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

    onChangeLogo(event) {
      this.createShop.logo = event.target.files[0];
    },
  },
};
</script>

<template>
  <div class="my-8">
    <h2 class="font-bold text-2xl">You Need to Create a New Shop.</h2>
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
        <button class="btn btn-primary w-full" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
