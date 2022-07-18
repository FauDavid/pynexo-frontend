import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const users = () => axios.get('https://my.api.mockaroo.com/users.json?key=397fe940');

export default new Vuex.Store({
  state: {
    users: users(),
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
