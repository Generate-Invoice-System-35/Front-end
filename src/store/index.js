import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vue-persistedstate";

Vue.use(Vuex);
const persistedDataState = createPersistedState({
    paths: ["auth.token"],
});