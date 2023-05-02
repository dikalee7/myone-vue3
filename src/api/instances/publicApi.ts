import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import useUtils from '@/composables/utils';
import { IFPublicApiResult } from '@/api/types/publicApi';

export default function () {
  const $utils = useUtils();
  const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.VUE_APP_PUBLIC_API_URL,
    timeout: 5000,
  };

  const instance: AxiosInstance = axios.create(axiosConfig);

  //요청 인터셉터 추가
  instance.interceptors.request.use(
    (config) => {
      //요청을 보내기 전에 수행할 로직
      $utils.cmn.setLoading(true);
      return config;
    },
    (error) => {
      //요청 에러가 발생했을 때 수행할 로직
      console.log('************ PUBLICAPI REQUEST ERROR ************');
      console.log(JSON.stringify(error, null, 2));
      $utils.cmn.setLoading(false);
      return Promise.reject(error);
    },
  );

  //응답 인터셉터 추가
  instance.interceptors.response.use(
    (response): any => {
      //응답에 대한 로직 작성
      $utils.cmn.setLoading(false);
      const result: IFPublicApiResult<any> = {
        ...response.data.response.header,
        data: response.data.response.body.items.item,
      };

      if (result.resultCode != '00') {
        //응답코드 '00' 성공이 아닌 경우 처리
        alert(result.resultMsg);
        return false;
      } else {
        return result;
      }
    },

    (error) => {
      //응답 에러가 발생했을 때 수행할 로직
      console.log('************ PUBLICAPI RESPONSE ERROR ************');
      console.log(JSON.stringify(error, null, 2));
      $utils.cmn.setLoading(false);
      return Promise.reject(error);
    },
  );

  return { instance };
}
