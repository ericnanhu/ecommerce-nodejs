import { defineStore } from "pinia";
import jwt_decode from "jwt-decode";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: localStorage.getItem("token") || null,
  }),
  getters: {
    getToken: (state) => state.token,
    getUser: (state) => jwt_decode(state.token),
  },
  actions: {
    setToken(token) {
      this.token = token;

      // Save token to local storage
      localStorage.setItem("token", this.token);
    },
    removeToken() {
      this.token = null;

      // Delete token from local storage
      localStorage.removeItem("token");
    },
  },
});
