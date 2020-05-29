import { LogErrorState } from '@/types/views/logerror.interface';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as ErrorApi from '@/api/logerror';

const state: LogErrorState = {
  error: {
    errorauthor: undefined
  }
};

// 强制使用getter获取state
const getters: GetterTree<LogErrorState, any> = {
  errorauthor: (state: LogErrorState) => state.error.errorauthor
};

// 更改state
const mutations: MutationTree<LogErrorState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: LogErrorState, data: LogErrorState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        return;
      }
      state[key] = data[key];
    }
  }
};

const actions: ActionTree<LogErrorState, any> = {
  UPDATE_STATE_ASYN({ commit, state: LogErrorState }, data: LogErrorState) {
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
