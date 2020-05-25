import { fakeTableList } from '../services';
import { history } from 'umi'
import { notification } from 'antd';

export default {
  namespace: 'table',
  state: {

  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getTableList({ payload }, { call, put }) {
      const response = yield call(fakeTableList, payload);
      yield put({
        type: 'save',
        payload: response,
      });

    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log(pathname)
        if (pathname === '/home/welcome' || pathname === '/user/login') {
          dispatch({
            type: 'getTableList',
            payload: { page: 1, PAGE_SIZE: 5 }
          })
        }
      });
    },
  },
};
