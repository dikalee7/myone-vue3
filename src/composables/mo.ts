import { IFConfirmRequset, IFMo } from '@/composables/types';
import emitter from '@/composables/emitter';

export default function (): IFMo {
  const reset = () => {
    emitter.off('returnAlert');
  };

  const callback = () => {
    return new Promise((resolve) => {
      reset();
      (emitter as any).on('returnAlert', (f: boolean) => {
        reset();
        resolve(f);
      });
    });
  };

  const alert = (o: IFConfirmRequset) => {
    o.options = o.options ?? {};
    o.options = Object.assign(o.options, { noconfirm: true });
    emitter.emit('showAlert', o);
    return callback() as Promise<boolean>;
  };

  const confirm = (o: IFConfirmRequset) => {
    o.options = o.options ?? {};
    o.options = Object.assign(o.options, { noconfirm: false });
    emitter.emit('showAlert', o);
    return callback() as Promise<boolean>;
  };

  return { alert, confirm };
}
