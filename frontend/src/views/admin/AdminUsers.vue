<script>
import axios from "axios";

export default {
  data() {
    return {
      users: {},
    };
  },

  async created() {
    try {
      const users = await axios({
        baseURL: import.meta.env.VITE_BACKENDURL,
        method: "get",
        url: "/admin/user/list",
      });
      this.users = users.data;
      console.log(this.users);
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    // async updateSite() {
    //   try {
    //     await axios({
    //       baseURL: import.meta.env.VITE_BACKENDURL,
    //       method: "put",
    //       url: "/admin/site/update",
    //       params: {
    //         siteID: this.site._id,
    //       },
    //       data: this.site,
    //     });
    //     window.location.reload();
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
  },
};
</script>

<template>
  <main>
    <div class="w-full p-8">
      <div
        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between"
      >
        <h2 class="font-bold text-2xl">Users</h2>
      </div>
      <div class="divider"></div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Username</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover" v-for="(user, key) in this.users" :key="key">
              <td>{{ key + 1 }}</td>
              <td>
                <div class="avatar">
                  <div class="w-16 rounded">
                    <img :src="user.avatar" alt="user profile" />
                  </div>
                </div>
              </td>
              <td>{{ user.username }}</td>
              <td>{{ user.role.name }}</td>
              <td class="flex space-x-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <input type="checkbox" id="updateSite" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="updateSite"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">Update Site Information</h3>
        <div class="divider"></div>
        <form
          action="PUT"
          class="flex flex-col space-y-8"
          id="updateSite"
          @submit.prevent="updateSite"
        >
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              v-model="this.site.name"
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
              v-model="this.site.description"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Keywords</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              v-model="this.site.keywords"
            />
          </div>

          <div class="modal-action">
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div> -->
  </main>
</template>
