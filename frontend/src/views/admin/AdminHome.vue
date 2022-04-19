<script>
import axios from "axios";

export default {
  data() {
    return {
      site: {
        name: "",
        description: "",
        keywords: "",
      },
    };
  },

  async created() {
    try {
      const site = await axios({
        baseURL: import.meta.env.VITE_BACKENDURL,
        method: "get",
        url: "/main/site",
      });
      this.site = site.data[0];
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async updateSite() {
      try {
        await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "put",
          url: "/admin/site/update",
          params: {
            siteID: this.site._id,
          },
          data: this.site,
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
  <main>
    <div class="w-full p-8">
      <div
        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between"
      >
        <h2 class="font-bold text-2xl">Website Information</h2>
        <label for="updateSite" class="btn btn-primary modal-button"
          >Update</label
        >
      </div>
      <div class="divider"></div>
      <p>
        <span class="font-bold">Name:</span>
        <span>{{ this.site.name }}</span>
      </p>
      <p>
        <span class="font-bold">Dewscription:</span>
        <span>{{ this.site.description }}</span>
      </p>
      <p>
        <span class="font-bold">Keywords:</span>
        <span>{{ this.site.keywords }}</span>
      </p>
    </div>
    <input type="checkbox" id="updateSite" class="modal-toggle" />
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
    </div>
  </main>
</template>
