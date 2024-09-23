import { createStore } from "vuex";

export default createStore({
  state: {
    login: false,
    usuario: {
      id: "",
      name: "",
      email: "",
      senha: "",
    },
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
  },
  actions: {},
  modules: {},
});
