import { ref } from 'vue';
import useUtils from '@/composables/utils';

export default function () {
  // const globalProperties =
  //   getCurrentInstance().appContext.config.globalProperties;

  const { cmn, mo } = useUtils();

  const testVal = ref('testVal');

  return { cmn, mo, testVal };
}
