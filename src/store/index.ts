import { createStore } from 'vuex';
import { LoadingModule, IFLoadingModule } from '@/store/modules/pageLoading';
import { HeaderModule, IFHeaderModule } from '@/store/modules/headerInfo';
import { ModalModule, IFModalModule } from '@/store/modules/modalInfo';

export interface RootState {
  LoadingModule: IFLoadingModule;
  HeaderModule: IFHeaderModule;
  ModalModule: IFModalModule;
}

export default createStore({
  modules: { LoadingModule, HeaderModule, ModalModule },
});
