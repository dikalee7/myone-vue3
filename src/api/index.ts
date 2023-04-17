import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { utils as $Utils } from '@/util/cmn';
import { IFResult } from '@/api/type';
import queryString from 'query-string';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_PUBLIC_API_URL,
};

const pubApiInst: AxiosInstance = axios.create(axiosConfig);

//타임아웃 설정
pubApiInst.defaults.timeout = 5000;

//요청 인터셉터 추가
pubApiInst.interceptors.request.use(
  (config) => {
    //요청을 보내기 전에 수행할 로직
    $Utils.cmn.setLoading(true);
    return config;
  },
  (error) => {
    //요청 에러가 발생했을 때 수행할 로직
    console.log('************ AXIOS REQUEST ERROR ************');
    console.log(JSON.stringify(error, null, 2));
    $Utils.cmn.setLoading(false);
    return Promise.reject(error);
  },
);

//응답 인터셉터 추가
pubApiInst.interceptors.response.use(
  (response): any => {
    //응답에 대한 로직 작성
    $Utils.cmn.setLoading(false);
    const result: IFResult<any> = {
      ...response.data.response.header,
      data: response.data.response.body.items.item,
    };

    console.log('config===>', response.config);

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
    console.log('************ AXIOS RESPONSE ERROR ************');
    console.log(JSON.stringify(error, null, 2));
    $Utils.cmn.setLoading(false);
    return Promise.reject(error);
  },
);

function axiosRequest(config: AxiosRequestConfig) {
  return pubApiInst(config);
}

function publicApiCall(url: string, param: object) {
  return pubApiInst.get(
    `${url}?${queryString.stringify(param)}&serviceKey=${
      process.env.VUE_APP_PUBLIC_API_KEY
    }`,
  );
}

export { axiosRequest, publicApiCall };
