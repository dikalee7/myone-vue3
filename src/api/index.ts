import useUtils from '@/composables/utils';
import queryString from 'query-string';
import pubApi from './instances/pubApiInst';
import stockApi from './instances/stockApiInst';
import { AxiosResponse } from 'axios';
import router from '@/router';
const { mo } = useUtils();

const pubApiInst = pubApi().instance;

async function pubApiCall<T>(
  url: string,
  param: object,
  errPage = '',
  errDirect = false,
): Promise<T> {
  const response: AxiosResponse<T, any> = await pubApiInst.get(
    `${url}?${queryString.stringify(param)}&serviceKey=${
      process.env.VUE_APP_API_KEY
    }`,
  );

  const result = {
    ...response.data,
    status: response.status,
    statusText: response.statusText,
  };

  return new Promise((resolve) => {
    if (!errDirect && result.status !== 200) {
      mo.alert({
        title: 'API 호출 실패',
        message: result.statusText,
      }).then(() => {
        if (errPage) router.replace(errPage);
      });
    } else {
      resolve(result);
    }
  });
}

const stockApiInst = stockApi().instance;
async function stockApiCall<T>(
  url: string,
  param: object,
  errPage = '',
  errDirect = false,
): Promise<T> {
  const response: AxiosResponse<T, any> = await stockApiInst.get(
    `${url}?${queryString.stringify(param)}&resultType=json&serviceKey=${
      process.env.VUE_APP_API_KEY
    }`,
  );

  const result = {
    ...response.data,
    status: response.status,
    statusText: response.statusText,
  };

  return new Promise((resolve) => {
    if (!errDirect && result.status !== 200) {
      mo.alert({
        title: 'API 호출 실패',
        message: result.statusText,
      }).then(() => {
        if (errPage) router.replace(errPage);
      });
    } else {
      resolve(result);
    }
  });
}

export { pubApiCall, stockApiCall };
