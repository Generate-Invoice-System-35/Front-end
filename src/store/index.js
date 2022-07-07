import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import createPersistedState from "vue-persistedstate";

Vue.use(Vuex);
const persistedDataState = createPersistedState({
    paths: ["auth.token"],
});
export default new Vuex.store({
    plugins: [persistedDataState],
    modules: {
        auth: {
            namespaced: true,
            ...auth,
        },
    },
});