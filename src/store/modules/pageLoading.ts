import { Module } from 'vuex';
import { RootState } from '../index';

export interface IFLoadingModule {
  pageLoading: boolean;
}

export const LoadingModule: Module<IFLoadingModule, RootState> = {
  namespaced: true,
  state: () => ({
    pageLoading: false,
  }),
  mutations: {
    setPageLoading(state, pageLoading: boolean) {
      state.pageLoading = pageLoading;
    },
  },
  getters: {
    isLoading(state) {
      return state.pageLoading;
    },
  },
  actions: {
    setPageLoading: function (context, payload) {
      return context.commit('setPageLoading', payload);
    },
  },
};
