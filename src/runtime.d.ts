import store from '@/store';
// import { IFUtils } from '@/composables/types';
import { Emitter } from 'mitt';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // $utils: IFUtils;
    $store: store;
    $emitter: Emitter<any>;
  }
}
export {};
