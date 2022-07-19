import axios from "axios";

const state = () => ({
  lists: [],
  error: "",
});

const mutations = {
  setNews(state, param) {
    state.lists = param;
  },
  setError(state, param) {
    state.error = param;
  },
};

const actions = {
  fetchListNews(store) {
    axios
      .get(`http://api.calorilin.me/invoice`)
      .then((response) => {
        console.log("response: ", response);
        // response.data.articles
        store.commit("setNews", response.data.invoice);
      })
      .catch((error) => {
        console.log("error: ", error);
        store.commit("setError", error.msg);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};