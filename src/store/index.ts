import { createStore } from 'vuex';
import { LoadingModule, IFLoadingModule } from '@/store/modules/pageLoading';
import { HeaderModule, IFHeaderModule } from '@/store/modules/headerInfo';

export interface RootState {
  LoadingModule: IFLoadingModule;
  HeaderModule: IFHeaderModule;
}

export default createStore({
  modules: { LoadingModule, HeaderModule },
});
