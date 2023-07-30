import useUtils from '@/composables/utils';
import queryString from 'query-string';
import pubApi from './instances/pubApiInst';
import stockApi from './instances/stockApiInst';
import dartApi from './instances/dartApiInst';
import { AxiosResponse } from 'axios';
import router from '@/router';
const { mo } = useUtils();

//start pubApiInst ==================
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
//stop pubApiInst ==================

//start stockApiInst ==================
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
//stop stockApiInst ==================

//start dartApiInst ==================
const dartApiInst = dartApi().instance;
async function dartApiCall<T>(
  url: string,
  param: object,
  errPage = '',
  errDirect = false,
): Promise<T> {
  const response: AxiosResponse<T, any> = await dartApiInst.get(
    `${url}?${queryString.stringify(param)}&crtfc_key=${
      process.env.VUE_APP_DART_KEY
    }`,
  );
  console.log('dartApiCall');
  console.log(JSON.stringify(response, null, 2));

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
//stop dartApiInst ===================

export { pubApiCall, stockApiCall, dartApiCall };
