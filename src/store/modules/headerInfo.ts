import { Module } from 'vuex';
import { RootState } from '../index';

/**
 * @param title  title of the header area
 * @param isShow  Screen exposure reference value of the header area
 */
export interface IFHeader {
  title: string;
  isShow: boolean;
  isHome: boolean;
  isBack: boolean;
}

export interface IFHeaderModule {
  headerInfo: IFHeader;
}

export const HeaderModule: Module<IFHeaderModule, RootState> = {
  namespaced: true,
  state: () => ({
    headerInfo: {
      title: '가이드',
      isShow: true,
      isHome: true,
      isBack: false,
    },
  }),
  mutations: {
    setHeaderInfo(state, headerInfo: Partial<IFHeader>) {
      state.headerInfo = {
        ...state.headerInfo,
        ...headerInfo,
      };
    },
  },
  getters: {
    getHeaderInfo(state) {
      return state.headerInfo;
    },
  },
};
