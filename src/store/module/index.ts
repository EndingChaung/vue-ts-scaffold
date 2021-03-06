import { IndexState } from '@/types/views/index.interface';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as IndexApi from '@/api/index';

const state: IndexState = {
  index: {
    auth: undefined,
  },
};

// 强制使用getter获取state
const getters: GetterTree<IndexState, any> = {
  auth: (state: IndexState) => state.index.auth,
};

// 更改state
const mutations: MutationTree<IndexState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: IndexState, data: IndexState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        return;
      }
      state[key] = data[key];
    }
  },
};

const actions: ActionTree<IndexState, any> = {
  UPDATE_STATE_ASYN({ commit, state: IndexState }, data: IndexState) {
    commit('UPDATE_STATE', data);
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Index.getData()
  // }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
