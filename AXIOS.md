# Axios 학습용

> axios 설치
  - npm install --save axios

> axios 호출 공통화
  - api 종류별 instance 분리
    - src/api/instances

    ```
    // 예) dartApiInst.ts
    import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
    import useUtils from '@/composables/utils';

    export default function () {
      const { cmn, mo } = useUtils();  // 공통, 알림 기능
    
      const axiosConfig: AxiosRequestConfig = {
        baseURL: process.env.VUE_APP_DART_API_URL,
        timeout: 10000,
      };

      const instance: AxiosInstance = axios.create(axiosConfig);

      //요청 인터셉터 추가
      instance.interceptors.request.use(
        (config) => {
          // 요청을 보내기 전에 수행할 로직
          cmn.setLoading(true);
          return config;
        },
        (error) => {
          //요청 에러가 발생했을 때 수행할 로직
          cmn.setLoading(false);
          return Promise.reject(error);
        },
      );

      //응답 인터셉터 추가
      instance.interceptors.response.use(
        (response): any => {
          //응답에 대한 로직 작성
          cmn.setLoading(false);
          ...(중략)...
          return response;
        },
        (error) => {
          // 응답 에러가 발생했을 때 수행할 로직
          ...(중략)...
          cmn.setLoading(false);
          return Promise.reject(error);
      );
    
      return { instance };
    }
    ```
    
  - api 종류별 type interface 파일 분리
    - src/api/types
  - api 종류별 호출 메서드 제공
    - src/api/index.ts
