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
      
    ```
    // 예) dartApi.ts
    // dart 기업정보 요청 타입정의
    export interface IFCompanyReq {
      corp_code: string;
    }

    // dart 기업정보 응답 타입정의
    export interface IFCompanyRes {
      status: string; //	에러 및 정보 코드	(※메시지 설명 참조)
      message: string; //	에러 및 정보 메시지	(※메시지 설명 참조)
      corp_name: string; //	정식명칭	정식회사명칭
      ...(중략)...
    }
    ```
    
  - api 종류별 api 메서드 제공
    - src/api/index.ts
    - 응답 type은 api 메서드 호출시 지정
      
    ```
    // 예) dartApiCall
    
    import dartApi from './instances/dartApiInst';
    
    const dartApiInst = dartApi().instance;
    async function dartApiCall<T>(
      url: string,
      param: object,
      errPage = '',
      errDirect = false,
    ): Promise<T> {
      const response: AxiosResponse<T, any> = await dartApiInst.get(
        `${url}?${queryString.stringify(param)}&crtfc_key=키정보`,
      );

      const result = {
        ...response.data,
        status: response.status,
        statusText: response.statusText,
      };

      return new Promise((resolve) => {
        if (!errDirect && result.status !== 200) {
          //실패시 처리로직
        } else {
          //성공시 처리로직
        }
      });
    }
    
    export { dartApiCall };

    //호출 예
    import { IFCompanyReq, IFCompanyRes } from '@/api/types/dartApi';
    
    async fnGetDetail(crno: string) {
      const req: IFCompanyReq = { corp_code: crno };
      const response = await this.dartApiCall<IFCompanyRes>(
        this.stockApi.finaStatInfo.uri,
        req,
      );
    }
    ```
