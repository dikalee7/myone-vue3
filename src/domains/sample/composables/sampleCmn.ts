import { ref } from 'vue';
import useUtils from '@/composables/utils';

export default function () {
  // const globalProperties =
  //   getCurrentInstance().appContext.config.globalProperties;

  const { cmn, useMo } = useUtils();
  const mo = useMo();

  const testVal = ref('testVal');

  return { cmn, mo, testVal };
}
