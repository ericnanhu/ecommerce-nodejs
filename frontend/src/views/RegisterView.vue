<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },

  methods: {
    async register() {
      try {
        await axios({
          baseURL: import.meta.env.VITE_BACKENDURL,
          method: "post",
          url: "/user/register",
          data: {
            username: this.username,
            email: this.email,
            password: this.password,
          },
        });
      } catch (e) {
        console.log(e);
      }

      await this.$router.push({
        path: "/login",
      });
    },

    // test() {
    //   console.log();
    // },
  },
};
</script>

<template>
  <main>
    <form
      class="form-control w-full max-w-xs mx-auto my-32 gap-4"
      @submit.prevent="register"
    >
      <div>
        <label class="label">
          <span class="label-text">Username:</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
          v-model="username"
        />
      </div>
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

      <button type="submit" class="btn btn-outline btn-primary w-full">
        Register
      </button>

      <small class="text-right text-xs"
        >Already have an account? Login
        <router-link to="/login" class="text-primary hover:underline"
          >Here</router-link
        >.</small
      >
    </form>
  </main>
</template>
