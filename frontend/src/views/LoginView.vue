<script>
import axios from "axios";
import { useUserStore } from "@/stores/user";

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async login() {
      try {
        const token = await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "post",
          url: "/user/login",
          data: {
            email: this.email,
            password: this.password,
          },
        });
        await this.userStore.setToken(token.data);
        window.location.reload(); // Refresh the page
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <main>
    <form
      class="form-control w-full max-w-xs mx-auto my-40 gap-4"
      @submit.prevent="login"
    >
      <div>
        <label class="label">
          <span class="label-text">Email:</span>
        </label>
        <input
          type="email"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
          v-model="email"
        />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Password:</span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
          v-model="password"
        />
      </div>

      <button class="btn btn-outline btn-primary w-full">Log In</button>

      <small class="text-right text-xs"
        >Don't have an account? Register
        <router-link to="/register" class="text-primary hover:underline"
          >Here</router-link
        >.</small
      >
    </form>
  </main>
</template>
