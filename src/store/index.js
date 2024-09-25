import { api } from "@/services.js";
import { createStore } from "vuex";

export default createStore({
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
    },
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    getUser(context, payload) {
      api.get(`/usuario/${payload}`).then((response) => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
  },
  modules: {},
});
