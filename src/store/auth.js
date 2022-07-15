import axios from "axios";
const apiHost = `http://api.calorilin.me`;

const state = () => ({
  token: "",
  info: "",
});

const mutations = {
  setToken(state, param) {
    state.token = param;
  },
  setInfo(state, param) {
    state.info = param;
  },
};

const actions = {
  register(store, credentials) {
    const result = axios.post(
        `${apiHost}/register`,
        {
          name: credentials.name,
          username: credentials.username,
          password: credentials.password,
          email: credentials.email,
          phone_number: credentials.phone_number,
          address: credentials.address,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${store.state.token}`,
        //     "Content-type": "application/json",
        //   },
        // }
      )
      .then((response) => {
        console.log("respon: ", response);
        if (response.status === 201) {
          return true;
        } else {
          store.commit("setInfo", response.message);
        }
      })
      .catch((error) => {
        console.log("error nya adalah", error);
        store.commit("setInfo", error);
      });

    return result;
  },

  login(store, credentials) {
    // console.log(credentials)
    return axios.post(`${apiHost}/login`, {
        username: credentials.data.username,
        password: credentials.data.password,
      })
      .then((response) => {
        if (response.status === 200) {
          store.commit("setToken", response.data.data);
          // store.commit(
          //   "user/setCurrentUser",
          //   {
          //     id: response.data.data.Id,
          //     username: response.data.data.Name,
          //     email: response.data.data.Email,
          //   },
          //   {
          //     root: true,
          //   }
          // );
          console.log(response.data);
          return response;
        } else {
          store.commit("setInfo", response.data.message);
        }
      })
      .catch((error) => {
        console.log("error nya adalah", error);
        store.commit("setInfo", error);
      });
  },
  
  logout(store) {
    store.commit("setToken", "");
    return true;
  },

  // checkUser(store, id) {
  //   return axios
  //     .get(`${apiHost}/api/users/${id}`, {
  //       headers: { Authorization: `Bearer ${store.state.token}` },
  //     })
  //     .then((response) => {
  //       console.warwn("response cekUser", response);
  //       if (response.data.message === "success") {
  //         store.commit("setToken", response.data.data.Token);
  //         store.commit(
  //           "user/setCurrentUser",
  //           {
  //             id: response.data.data.Id,
  //             username: response.data.data.Name,
  //             email: response.data.data.Email,
  //           },
  //           {
  //             root: true,
  //           }
  //         );
  //         return response;
  //       } else {
  //         store.commit("setInfo", response.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       store.commit("setInfo", error);
  //     });
  // },

};

export default {
  state,
  mutations,
  actions,
};
