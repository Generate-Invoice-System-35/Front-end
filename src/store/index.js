import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./auth";
Vue.use(Vuex);

const persistedDataState = createPersistedState({
  paths: ["auth.token"],
});
console.log(auth)
export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    auth: {
      namespaced: true,
      ...auth,
    },
  },
});