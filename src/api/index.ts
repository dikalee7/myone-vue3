import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_API_BILLINFO_URL,
};

const instance: AxiosInstance = axios.create(axiosConfig);

//타임아웃 설정
instance.defaults.timeout = 2500;

//요청 인터셉터 추가
instance.interceptors.request.use(
  (config) => {
    //요청을 보내기 전에 수행할 로직
    console.log('************ AXIOS REQUEST ************');
    console.log(JSON.stringify(config, null, 2));
    return config;
  },
  (error) => {
    //요청 에러가 발생했을 때 수행할 로직
    console.log('************ AXIOS REQUEST ERROR ************');
    console.log(JSON.stringify(error, null, 2));
    return Promise.reject(error);
  },
);

//응답 인터셉터 추가
instance.interceptors.response.use(
  (response) => {
    //응답에 대한 로직 작성
    const res = response;
    console.log('************ AXIOS RESPONSE ************');
    console.log(JSON.stringify(res, null, 2));
    return res;
  },

  (error) => {
    //응답 에러가 발생했을 때 수행할 로직
    console.log('************ AXIOS RESPONSE ERROR ************');
    console.log(JSON.stringify(error, null, 2));
    return Promise.reject(error);
  },
);

function axiosRequest(config: AxiosRequestConfig) {
  return instance(config);
}

function publicApis(url: string, qStr: string) {
  return instance.get(
    `${url}?serviceKey${qStr}&serviceKey=${process.env.VUE_APP_API_BILLINFO_KEY}`,
  );
}

export { axiosRequest, publicApis };
