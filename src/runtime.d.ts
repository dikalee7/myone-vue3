import store from '@/store';
import { IFUtils } from '@/util/cmn';
import { IFMo } from '@/composables/mo';
import Swal from 'sweetalert2/dist/sweetalert2.js';
declare type TVueSwalInstance = typeof Swal & typeof Swal.fire;

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $utils: IFUtils;
    $store: store;
    $swal: TVueSwalInstance;
    $mo: IFMo;
  }
}
export {};
