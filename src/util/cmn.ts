import store from '@/store';
import lds, { LoDashStatic } from 'lodash';
import { IFHeader } from '@/store/modules/headerInfo';

interface IFCmn {
  /** Description : Page Loading */
  setLoading: (f: boolean) => void;
  setHeader: (f: IFHeader) => void;
}

interface IFUtils {
  cmn: IFCmn;
  lds: LoDashStatic;
}

const cmn: IFCmn = {
  setLoading: (f: boolean) => {
    store.commit('LoadingModule/setPageLoading', f);
  },
  setHeader: (o: IFHeader) => {
    store.commit('HeaderModule/setHeaderInfo', lds.omitBy(o, lds.isUndefined));
  },
};

const utils: IFUtils = {
  cmn,
  lds,
};

export { utils, IFUtils };
