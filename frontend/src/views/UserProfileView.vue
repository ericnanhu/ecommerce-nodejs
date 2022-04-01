<script>
import axios from "axios";
import { useUserStore } from "@/stores/user";

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },

  props: {
    userID: String,
  },

  data() {
    return {
      user: {
        name: "",
        avatar: null,
        username: "",
        email: "",
        phone: "",
        address: {
          country: "",
          province: "",
          city: "",
          postCode: "",
          street: "",
        },
      },
      updateUser: {
        name: "",
        avatar: null,
        username: "",
        email: "",
        phone: "",
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
      const user = await axios({
        baseURL: import.meta.env.VITE_BACKENDURL,
        method: "get",
        url: "/user/show",
        params: {
          userID: this.userID,
        },
      });

      this.user = user.data;
      this.updateUser = user.data;
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async updateProfile() {
      try {
        const formData = new FormData();

        formData.append("name", this.updateUser.name);
        formData.append("avatar", this.updateUser.avatar);
        formData.append("username", this.updateUser.username);
        formData.append("email", this.updateUser.email);
        formData.append("phone", this.updateUser.phone);
        formData.append("country", this.updateUser.address.country);
        formData.append("province", this.updateUser.address.province);
        formData.append("city", this.updateUser.address.city);
        formData.append("street", this.updateUser.address.street);
        formData.append("postCode", this.updateUser.address.postCode);

        await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "put",
          url: "/user/update",
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

    onChangeAvatarUpload(event) {
      this.updateUser.avatar = event.target.files[0];
    },
  },
};
</script>

<template>
  <main>
    <div class="flex flex-col space-y-4 mx-2 md:mx-0 items-center">
      <div class="avatar">
        <div
          class="w-24 sm:w-36 md:w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
        >
          <img :src="this.user.avatar" />
        </div>
      </div>
      <div>
        <p class="font-bold text-3xl">
          {{ this.user.name }}
        </p>
        <p class="text-sm text-gray-500">@{{ this.user.username }}</p>
      </div>
      <div class="rounded-md shadow-md w-full p-8">
        <div
          class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between"
        >
          <h2 class="font-bold text-2xl">My Information</h2>
          <label for="updateUserInfo" class="btn btn-primary modal-button"
            >Update Information</label
          >
        </div>
        <div class="divider"></div>

        <p>
          <span class="font-bold">Phone:</span>
          <span>{{ this.user.phone }}</span>
        </p>
        <p>
          <span class="font-bold">Email:</span>
          <span>{{ this.user.email }}</span>
        </p>
        <p>
          <span class="font-bold">Street:</span>
          <span>{{ this.user.address.street }}</span>
        </p>
        <p>
          <span class="font-bold">City:</span>
          <span>{{ this.user.address.city }}</span>
        </p>
        <p>
          <span class="font-bold">Province:</span>
          <span>{{ this.user.address.province }}</span>
        </p>
        <p>
          <span class="font-bold">Country:</span>
          <span>{{ this.user.address.country }}</span>
        </p>
        <p>
          <span class="font-bold">Post Code:</span>
          <span>{{ this.user.address.postCode }}</span>
        </p>
      </div>

      <div class="rounded-md shadow-md w-full p-8">
        <h2 class="font-bold text-2xl">My Orders</h2>
        <div class="divider"></div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover">
                <th>1</th>
                <td>Lorem ipsum dolor sit amet</td>
                <td>$ 999</td>
                <td>Mar 23, 2022</td>
              </tr>
              <tr class="hover">
                <th>2</th>
                <td>Lorem ipsum dolor sit amet</td>
                <td>$ 999</td>
                <td>Mar 23, 2022</td>
              </tr>
              <tr class="hover">
                <th>3</th>
                <td>Lorem ipsum dolor sit amet</td>
                <td>$ 999</td>
                <td>Mar 23, 2022</td>
              </tr>
              <tr class="hover">
                <th>4</th>
                <td>Lorem ipsum dolor sit amet</td>
                <td>$ 999</td>
                <td>Mar 23, 2022</td>
              </tr>
              <tr class="hover">
                <th>5</th>
                <td>Lorem ipsum dolor sit amet</td>
                <td>$ 999</td>
                <td>Mar 23, 2022</td>
              </tr>
              <tr class="hover">
                <th>6</th>
                <td>Lorem ipsum dolor sit amet</td>
                <td>$ 999</td>
                <td>Mar 23, 2022</td>
              </tr>
              <tr class="hover">
                <th>7</th>
                <td>Lorem ipsum dolor sit amet</td>
                <td>$ 999</td>
                <td>Mar 23, 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <input type="checkbox" id="updateUserInfo" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="updateUserInfo"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Update Your Information</h3>
        <div class="divider"></div>
        <form
          action="POST"
          class="flex flex-col space-y-8"
          id="updateUserForm"
          @submit.prevent="updateProfile"
        >
          <div>
            <h4 class="font-bold text-base">About You</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.updateUser.name"
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
                  v-model="this.updateUser.phone"
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
                  v-model="this.updateUser.email"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full"
                  v-model="this.updateUser.username"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Avatar</span>
                </label>
                <input
                  type="file"
                  placeholder="Type here"
                  class="input input-bordered w-full py-1.5"
                  @change="onChangeAvatarUpload($event)"
                />
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
                  v-model="this.updateUser.address.street"
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
                  v-model="this.updateUser.address.city"
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
                  v-model="this.updateUser.address.province"
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
                  v-model="this.updateUser.address.country"
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
                  v-model="this.updateUser.address.postCode"
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
  </main>
</template>
