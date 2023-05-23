import useUtils from '@/composables/utils';
import { useKakao } from 'vue3-kakao-sdk';
import { IFkakao } from '@/plugins/vue3-kakao';

export default function () {
  const { cmn, mo } = useUtils();
  const { kakao } = useKakao();
  return { cmn, mo, kakao: kakao as unknown as IFkakao };
}
