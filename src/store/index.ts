import Vue from 'vue';
import Vuex from 'vuex';
import Login from './module/login';
import Index from './module/index';
import Main from './module/main';
import Realname from './module/realname';
import Sign from './module/sign';
import Registration from './module/registration';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Login,
    Index,
    Main,
    Realname,
    Sign,
    Registration
  }
});
