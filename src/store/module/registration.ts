import { RegistrationState } from '@/types/views/registration.interface';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as RejistrationApi from '@/api/rejistration';

const state: RegistrationState = {
  registration: {
    registrationauthor: undefined
  }
};

// 强制使用getter获取state
const getters: GetterTree<RegistrationState, any> = {
  rejistrationauthor: (state: RegistrationState) =>
    state.registration.registrationauthor
};

// 更改state
const mutations: MutationTree<RegistrationState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: RegistrationState, data: RegistrationState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        return;
      }
      state[key] = data[key];
    }
  }
};

const actions: ActionTree<RegistrationState, any> = {
  UPDATE_STATE_ASYN({ commit }, data: RegistrationState) {
    commit('UPDATE_STATE', data);
  }
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Rejistration.getData()
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
