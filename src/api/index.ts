import queryString from 'query-string';
import publicApi from './instances/publicApi';

const publicApiInst = publicApi().instance;

function publicApiCall(url: string, param: object) {
  return publicApiInst.get(
    `${url}?${queryString.stringify(param)}&serviceKey=${
      process.env.VUE_APP_PUBLIC_API_KEY
    }`,
  );
}

export { publicApiCall };
