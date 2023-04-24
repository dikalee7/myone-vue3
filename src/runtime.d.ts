import store from '@/store';
import { IFUtils } from '@/composables/cmn';
import { IFMo } from '@/composables/mo';
import { Emitter } from 'mitt';
import Swal from 'sweetalert2/dist/sweetalert2.js';
declare type TVueSwalInstance = typeof Swal & typeof Swal.fire;

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $utils: IFUtils;
    $store: store;
    $swal: TVueSwalInstance;
    $mo: IFMo;
    $emitter: Emitter<any>;
  }
}
export {};
