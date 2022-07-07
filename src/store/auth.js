import axios from "axios";
const apiHost = "http://api.calorilin.me";

const state = () => ({
    token: [],
    info: '',
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
    register(state, cerdentials) {
        cons result = axios
        .post(
            `$(apiHost)/register`, {
                name: credencials.name,
                username: cerdentials.username,
                password: cerdentials.password,
                email: cerdentials.email,
                number_phone: cerdentials.number_phone,
                address: cerdentials.address,
            }
        )
        .then((response) => {
            console.log("respon: ", response);
            if (response.status === 201) {
                returnt true;
            } else {
                store.commit("SetInfo", response.message);
            }
        })
        .catch((error) => {
            console.log("error nya adalah", error);
            store.commit("setInfo", error);
        });

        return result;

        login(store, credencials) {
            return axios
            .post(`${apiHost}/login`, {
                username: cerdentials.username,
                password: credencials.password,
            })
            .then((response) => {
                if (response.status === 208) {
                    store.commit("setToken", response.data.data);
                    console.log(response.data);
                    return response;
                } else {
                    store.commit("setInfo", response.data.message);
                }
            });
        },
        logout(state){
            store.commit("setToken", "");
            return true;
        },
    };
    export default {
        state,
        mutations,
        actions,
    }
}