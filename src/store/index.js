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
    releaseItem: {
      title: "",
      tag: "",
      editorContent: "",
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
    UPDATE_RELEASE(state, payload) {
      state.releaseItem = Object.assign(state.releaseItem, payload);
    },
  },
  actions: {
    getUser(context, payload) {
      api.get(`/usuario/${payload}`).then((response) => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    createCardLink(context, payload) {
      api.post("/add-card-link", payload);
    },
    createRelease(context, payload) {
      api.post("/add-release", payload);
      context.commit("UPDATE_RELEASE", payload);
    },
  },
  modules: {},
});
