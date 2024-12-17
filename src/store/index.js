import { api } from "@/services.js";
import { createStore } from "vuex";

export default createStore({
  strict: true,
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
    },
    cardLink: {
      title: "",
      iconPath: "",
      description: "",
      link: "",
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
    UPDATE_LINK(state, payload) {
      state.cardLink = Object.assign(state.cardLink, payload);
    },
  },
  actions: {
    getUser(context, payload) {
      console.log(payload);
      api.get(`/usuario/${payload}`).then((response) => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    createCardLink(context, payload) {
      api.post("/cardLinks", payload);
    },
  },
  modules: {},
});
