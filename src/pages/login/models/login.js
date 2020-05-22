import { fakeAccountLogin } from '../services/login';
import { history } from 'umi'
import { notification } from 'antd';

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
      if (response.status === 'ok') {
        localStorage.setItem('userInfo', JSON.stringify(response));
        history.replace('/home/welcome');
      } else {
        notification.open(
          {
            message: 'network err',
            description: response.msg,
            duration: 2,
          }
        )
      }
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
