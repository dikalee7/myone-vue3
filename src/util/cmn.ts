import store from '@/store';

interface IFCmn {
  /** Description : Page Loading */
  setLoading: (f: boolean) => void;
  cmnTest: () => void;
  cmnTest2: () => void;
}

const cmn: IFCmn = {
  setLoading: (f: boolean) => {
    store.commit('setPageLoading', f);
  },
  cmnTest: () => {
    console.log('cmnTest');
  },
  cmnTest2: () => {
    console.log('cmnTest2');
  },
};

export { cmn, IFCmn };
