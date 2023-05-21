import useUtils from '@/composables/utils';

export default function () {
  const { cmn, mo } = useUtils();
  return { cmn, mo };
}
