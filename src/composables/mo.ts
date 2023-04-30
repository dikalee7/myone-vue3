import { getCurrentInstance } from 'vue';
import { IFConfirmRequset, IFMo } from '@/composables/types';

export default function (): IFMo {
  const globalProperties =
    getCurrentInstance().appContext.config.globalProperties;

  const reset = () => {
    globalProperties.$emitter.off('returnAlert');
  };

  const callback = () => {
    return new Promise((resolve) => {
      reset();
      globalProperties.$emitter.on('returnAlert', (f: boolean) => {
        reset();
        resolve(f);
      });
    });
  };

  const alert = (o: IFConfirmRequset) => {
    o.options = o.options ?? {};
    o.options = Object.assign(o.options, { noconfirm: true });
    globalProperties.$emitter.emit('showAlert', o);
    return callback();
  };

  const confirm = (o: IFConfirmRequset) => {
    o.options = o.options ?? {};
    o.options = Object.assign(o.options, { noconfirm: false });
    globalProperties.$emitter.emit('showAlert', o);
    return callback();
  };

  return { alert, confirm };
}
