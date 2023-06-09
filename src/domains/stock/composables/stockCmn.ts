import useUtils from '@/composables/utils';
import { stockApiCall } from '@/api/index';
export default function () {
  const { cmn, mo } = useUtils();

  const stockApi = {
    priceList: {
      name: '주식 시세 목록',
      uri: '/GetStockSecuritiesInfoService/getStockPriceInfo',
      method: 'get',
    },
  };

  return { cmn, mo, stockApi, stockApiCall };
}
