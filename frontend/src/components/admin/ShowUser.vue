<script>
import axios from "axios";

export default {
  props: {
    userID: String,
    userKey: Number,
  },
  data() {
    return {
      user: {},
      dataLoaded: false,
    };
  },

  methods: {
    async showUser() {
      try {
        const user = await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "get",
          url: "/admin/user/show",
          params: {
            userID: this.userID,
          },
        });

        this.user = user.data;
        this.dataLoaded = true;
        // console.log(this.user);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <label
    :for="'showUser' + this.userKey"
    class="btn btn-primary btn-outline"
    @click="showUser()"
    >Show</label
  >
  <input type="checkbox" :id="'showUser' + this.userKey" class="modal-toggle" />
  <div class="modal" v-if="dataLoaded">
    <div class="modal-box w-11/12 max-w-5xl">
      <label
        :for="'showUser' + this.userKey"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="font-bold text-lg">{{ this.user.name }}</h3>
      <div class="divider"></div>

      <div>
        <div class="flex flex-col flex-wrap gap-4">
          <div>
            <strong>Email: </strong><span> {{ this.user.email }}</span>
          </div>
          <div>
            <strong>Phone: </strong><span> {{ this.user.phone }}</span>
          </div>
          <div>
            <strong>Address: </strong>
            <span> {{ this.user.address.street }},</span>
            <span> {{ this.user.address.city }},</span>
            <span> {{ this.user.address.province }},</span>
            <span> {{ this.user.address.country }},</span>
            <span> {{ this.user.address.postCode }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
