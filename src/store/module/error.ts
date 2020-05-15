import { ErrorState } from '@/types/views/error.interface';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as ErrorApi from '@/api/error';

const state: ErrorState = {
  error: {
    errorauthor: undefined
  }
};

// 强制使用getter获取state
const getters: GetterTree<ErrorState, any> = {
  errorauthor: (state: ErrorState) => state.error.errorauthor
};

// 更改state
const mutations: MutationTree<ErrorState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: ErrorState, data: ErrorState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        return;
      }
      state[key] = data[key];
    }
  }
};

const actions: ActionTree<ErrorState, any> = {
  UPDATE_STATE_ASYN({ commit, state: ErrorState }, data: ErrorState) {
    commit('UPDATE_STATE', data);
  }
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Error.getData()
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
