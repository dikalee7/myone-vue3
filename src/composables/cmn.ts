import store from '@/store';
import lds, { LoDashStatic } from 'lodash';
import { IFHeader } from '@/store/modules/headerInfo';

export interface IFCmn {
  /** Description : Page Loading */
  setLoading: (f: boolean) => void;
  setHeader: (f: IFHeader) => void;
}

export interface IFUtils {
  cmn: IFCmn;
  lds: LoDashStatic;
}

export default function (): IFUtils {
  const cmn: IFCmn = {
    setLoading: (f: boolean) => {
      store.commit('LoadingModule/setPageLoading', f);
    },
    setHeader: (o: IFHeader) => {
      store.commit(
        'HeaderModule/setHeaderInfo',
        lds.omitBy(o, lds.isUndefined),
      );
    },
  };

  return { cmn, lds };
}
