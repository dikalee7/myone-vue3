import store from '@/store';
import { IFUtils } from '@/util/cmn';
import { LoDashStatic } from 'lodash';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $utils: IFUtils;
    $store: store;
  }
}
export {};
