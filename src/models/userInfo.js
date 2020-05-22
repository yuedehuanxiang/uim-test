
export default {
  namespace: 'userInfo',
  state: {

  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *login({ payload }, { call, put }) {

    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {

      });
    },
  },
};
