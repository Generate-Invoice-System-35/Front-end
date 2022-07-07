import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import createPersistedState from "vue-persistedstate";

Vue.use(Vuex);
const persistedDataState = createPersistedState({
    paths: ["auth.token"],
});
export default new Vue.store({
    plugins: [persistedDataState],
    module: {
        auth: {
            namespaced: true,
            ...auth,
        },
    },
});