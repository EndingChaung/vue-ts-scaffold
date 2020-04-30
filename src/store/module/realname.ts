import { RealnameState } from '@/types/views/realname.interface';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as RealnameApi from '@/api/realname';

const state: RealnameState = {
  realname: {
    realnameauthor: undefined
  }
};

// 强制使用getter获取state
const getters: GetterTree<RealnameState, any> = {
  realnameauthor: (state: RealnameState) => state.realname.realnameauthor
};

// 更改state
const mutations: MutationTree<RealnameState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: RealnameState, data: RealnameState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        return;
      }
      state[key] = data[key];
    }
  }
};

const actions: ActionTree<RealnameState, any> = {
  UPDATE_STATE_ASYN({ commit, state: RealnameState }, data: RealnameState) {
    commit('UPDATE_STATE', data);
  }
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Realname.getData()
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
