import { fakeAccountLogin } from '../services/login';

export default {
  namespace: 'login',
  state: {
    status: '',
    type: false
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        // if (pathname === '/users') {
        //   dispatch({ type: 'fetch', payload: query });
        // }
      });
    },
  },
};
