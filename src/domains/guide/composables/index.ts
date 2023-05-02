import { getCurrentInstance, ref } from 'vue';

export default function () {
  const globalProperties =
    getCurrentInstance().appContext.config.globalProperties;

  const guideList = ref([
    { gbn: 'COMP', name: '헤더-MyoneHeader', value: 'MyoneHeader' },
    { gbn: 'COMP', name: '팝업헤더-PopupHeader', value: 'PopupHeader' },
    { gbn: 'COMP', name: '셀렉트박스-SelectComp', value: 'SelectComp' },
    { gbn: 'COMP', name: '리스트-ListComp', value: 'ListComp' },
    { gbn: 'UTIL', name: '공통 함수', value: 'UtilsCmn' },
    { gbn: 'UTIL', name: '알림-Alert', value: 'AlertUtil' },
  ]);
  return { guideList, ...globalProperties };
}
