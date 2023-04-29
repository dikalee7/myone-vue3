import { getCurrentInstance } from 'vue';
import { IFConfirmRequset } from '@/composables/types';

export default function () {
  const globalProperties =
    getCurrentInstance().appContext.config.globalProperties;

  const callback = () => {
    return new Promise((resolve) => {
      globalProperties.$emitter.off('returnAlert');
      globalProperties.$emitter.on('returnAlert', (f: boolean) => {
        console.log('callback==>', f);
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
