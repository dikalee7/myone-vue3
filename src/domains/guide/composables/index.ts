import { getCurrentInstance, ref } from 'vue';

export default function () {
  const globalProperties =
    getCurrentInstance().appContext.config.globalProperties;

  const guideList = ref([
    { gbn: 'ALL', name: '전체', value: 'A' },
    { gbn: 'COMP', name: '헤더-MyoneHeader', value: 'MyoneHeader' },
    { gbn: 'COMP', name: '셀렉트박스-SelectComp', value: 'SelectComp' },
    { gbn: 'COMP', name: '리스트-ListComp', value: 'ListComp' },
    { gbn: 'UTIL', name: '알림-Alert', value: 'AlertUtil' },
    { gbn: 'UTIL', name: '동적팝업-Modal', value: 'ModalUtil' },
  ]);
  return { guideList, ...globalProperties };
}
