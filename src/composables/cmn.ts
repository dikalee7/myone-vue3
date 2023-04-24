import store from '@/store';
import _, { LoDashStatic } from 'lodash';
import { IFHeader } from '@/store/modules/headerInfo';
import { IFModal } from '@/store/modules/modalInfo';

export interface IFCmn {
  /** Description : Page Loading */
  setLoading: (f: boolean) => void;
  setHeader: (o: IFHeader) => void;
  setModal: (o: IFModal) => void;
}

export interface IFUtils {
  cmn: IFCmn;
  _: LoDashStatic;
}

export default function (): IFUtils {
  const cmn: IFCmn = {
    setLoading: (f: boolean) => {
      store.commit('LoadingModule/setPageLoading', f);
    },
    setHeader: (o: IFHeader) => {
      store.commit('HeaderModule/setHeaderInfo', _.omitBy(o, _.isUndefined));
    },
    setModal: (o: IFModal) => {
      store.commit('ModalModule/setModalInfo', o);
    },
  };

  return { cmn, _ };
}
