import { createStore } from 'vuex';

export default createStore({
  state: {
    pageLoading: false,
  },
  getters: {
    isLoading(state) {
      return state.pageLoading;
    },
  },
  mutations: {
    setPageLoading(state, pageLoading) {
      state.pageLoading = pageLoading;
    },
  },
});
