import store from '@/store';
import { IFStrUtil } from '@/util/stringUtils';
import { IFCmn } from '@/util/cmn';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $cmn: IFCmn;
    $strUtil: IFStrUtil;
    $store: store;
  }
}
export {};
