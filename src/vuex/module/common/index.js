import actions from './actions';
import * as types from './constants';

const state = {
  loading: false,
  mockDatas: [],
  mockDatasPage: Object
};

const mutations = {
  [types.LOADING_START](state) {
    state.loading = true;
  },
  [types.LOADING_DONE](state) {
    state.loading = false;
  },
  [types.FETCH_MOCK_DATAS](state, {list}) {
    state.mockDatas = list;
  }
};

export default {
  state,
  actions,
  mutations
};
