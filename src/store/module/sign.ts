import { SignState } from '@/types/views/sign.interface';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as SignApi from '@/api/sign';

const state: SignState = {
  sign: {
    signauthor: undefined
  }
};

// 强制使用getter获取state
const getters: GetterTree<SignState, any> = {
  signauthor: (state: SignState) => state.sign.signauthor
};

// 更改state
const mutations: MutationTree<SignState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: SignState, data: SignState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        return;
      }
      state[key] = data[key];
    }
  }
};

const actions: ActionTree<SignState, any> = {
  UPDATE_STATE_ASYN({ commit, state: SignState }, data: SignState) {
    commit('UPDATE_STATE', data);
  }
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Sign.getData()
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
