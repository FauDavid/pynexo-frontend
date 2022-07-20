import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const users = () => [{
  id: 1, username: 'asmedley0', password: 'rksy0Rvkvk', email: 'asmedley0@csmonitor.com', first_name: 'Abey', last_name: 'Smedley', gender: 'Male', balance: '$95.53', contacts: [2, 3, 4],
},
{
  id: 2, username: 'fbergin1', password: 'vZ3WnG', email: 'fbergin1@wikia.com', first_name: 'Fae', last_name: 'Bergin', gender: 'Female', balance: '$60.93',
},
{
  id: 3, username: 'nniemiec2', password: 'wbfoPN9R', email: 'nniemiec2@ifeng.com', first_name: 'Noelle', last_name: 'Niemiec', gender: 'Female', balance: '$67.28',
},
{
  id: 4, username: 'dstabbins3', password: 'VJRjwr0gz', email: 'dstabbins3@taobao.com', first_name: 'Dre', last_name: 'Stabbins', gender: 'Female', balance: '$93.66',
},
{
  id: 5, username: 'ahasley4', password: 'v2vc6lJe8gzo', email: 'ahasley4@dot.gov', first_name: 'Ara', last_name: 'Hasley', gender: 'Female', balance: '$33.67',
},
{
  id: 6, username: 'zluebbert5', password: '3P4RzlJVX', email: 'zluebbert5@upenn.edu', first_name: 'Zacharie', last_name: 'Luebbert', gender: 'Male', balance: '$99.85',
},
{
  id: 7, username: 'orosencrantz6', password: '0PEuROQRkkhc', email: 'orosencrantz6@nifty.com', first_name: 'Onfroi', last_name: 'Rosencrantz', gender: 'Male', balance: '$69.04',
},
{
  id: 8, username: 'jfarnon7', password: 'QSWwBnZlNWjq', email: 'jfarnon7@hubpages.com', first_name: 'Jeane', last_name: 'Farnon', gender: 'Female', balance: '$65.23',
},
{
  id: 9, username: 'ascaddon8', password: 'ZkRj9YIsmR', email: 'ascaddon8@nba.com', first_name: 'Arnaldo', last_name: 'Scaddon', gender: 'Male', balance: '$15.13',
},
{
  id: 10, username: 'dcoppin9', password: 'Tv7zvcR2lZ', email: 'dcoppin9@go.com', first_name: 'Damian', last_name: 'Coppin', gender: 'Male', balance: '$55.76',
}];

export default new Vuex.Store({
  state: {
    users: users(),
  },
  getters: {
    getUserById: (state) => (id: number) => state.users
      .find((user) => user.id === id),
    getUserByUsername: (state) => (username: string) => state.users
      .find((user) => user.username === username),
    getBalanceByUsername: (state) => (username: string) => state.users
      .find((user) => user.username === username)
      ?.balance,
    getFirstNameByUsername: (state) => (username: string) => state.users
      .find((user) => user.username === username)
      ?.first_name,
    getLastNameByUsername: (state) => (username: string) => state.users
      .find((user) => user.username === username)
      ?.last_name,
    getContactsByUsername: (state, getters) => (username: string) => {
      const contactsIds = state.users.find((user) => user.username === username)?.contacts;
      return contactsIds?.map((contactId) => getters.getUserById(contactId));
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
