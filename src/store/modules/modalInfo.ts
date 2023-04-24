import { Module } from 'vuex';
import { RootState } from '../index';

/**
 * @param cpath  path of component
 * @param cparam param of component
 */
export interface IFModal {
  cpath: string;
  cparam?: object;
}

export interface IFModalModule {
  modalInfo: IFModal;
}

export const ModalModule: Module<IFModalModule, RootState> = {
  namespaced: true,
  state: () => ({
    modalInfo: {
      cpath: '',
      cparam: {},
    },
  }),
  getters: {
    getModalInfo(state) {
      return state.modalInfo;
    },
  },
  mutations: {
    setModalInfo(state, modalInfo: IFModal) {
      state.modalInfo = modalInfo;
    },
  },
};
