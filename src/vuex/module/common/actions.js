import * as types from './constants';

exports.fetchMockDatas = ({commit}) => {
  commit(types.LOADING_START);
  setTimeout(() => {
    commit(types.LOADING_DONE);
    commit(types.FETCH_MOCK_DATAS, {list: [{id: 1, count: 1}, {id: 2, count: 2}]});
  }, 1000);
};
