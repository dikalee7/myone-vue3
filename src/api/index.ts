import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { IFHuman } from '@/domains/main/type';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_API_URL,
};

const instance: AxiosInstance = axios.create(axiosConfig);

function registerUser(data: IFHuman) {
  instance.post('signup', data);
}

export { registerUser };
