import useUtils from '@/composables/utils';
import queryString from 'query-string';
import pubApi from './instances/pubApiInst';
import { AxiosResponse } from 'axios';
import router from '@/router';

const pubApiInst = pubApi().instance;
const { mo } = useUtils();

async function pubApiCall<T>(
  url: string,
  param: object,
  errPage = '',
  errDirect = false,
): Promise<T> {
  const response: AxiosResponse<T, any> = await pubApiInst.get(
    `${url}?${queryString.stringify(param)}&serviceKey=${
      process.env.VUE_APP_PUBLIC_API_KEY
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

export { pubApiCall };
