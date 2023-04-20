import { Module } from 'vuex';
import { RootState } from '../index';

/**
 * @param title  title of the header area
 * @param isShow  Screen exposure reference value of the header area
 */
export interface IFHeader {
  title?: string;
  hideHeader?: boolean;
  hideBack?: boolean;
  hideHome?: boolean;
}

export interface IFHeaderModule {
  headerInfo: IFHeader;
}

export const HeaderModule: Module<IFHeaderModule, RootState> = {
  namespaced: true,
  state: () => ({
    headerInfo: {
      title: '',
      hideHeader: false,
      hideBack: false,
      hideHome: false,
    },
  }),
  getters: {
    getHeaderInfo(state) {
      return state.headerInfo;
    },
  },
  mutations: {
    setHeaderInfo(state, headerInfo: IFHeader) {
      state.headerInfo = {
        ...state.headerInfo,
        ...headerInfo,
      };
    },
  },
  // actions: {
  //   setHeaderInfo: function (context, payload: Partial<IFHeader>) {
  //     return context.commit('setHeaderInfo', payload);
  //   },
  // },
};
