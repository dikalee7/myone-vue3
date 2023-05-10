import store from '@/store';
import _ from 'lodash';
import { IFHeader } from '@/store/modules/headerInfo';
import { IFCmn, IFUtils } from '@/composables/types';
import useMo from '@/composables/mo';

export default function (): IFUtils {
  const cmn: IFCmn = {
    setLoading: (f: boolean) => {
      store.commit('LoadingModule/setPageLoading', f);
    },
    setHeader: (o: IFHeader) => {
      store.commit('HeaderModule/setHeaderInfo', _.omitBy(o, _.isUndefined));
    },
  };

  return { cmn, _, mo: useMo() };
}
