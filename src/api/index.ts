import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config = {
  baseURL: process.env.NODE_ENV === "development" ? "" : "http://47.93.17.251:9005",
  timeout: 5000,
  withCredentials: true,
};

class Axios {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);
    this.service.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    this.service.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }
  get(url: string, params?: object, header = {}) {
    return this.service.get(url, { params, ...header });
  }
  post(url: string, params?: object, header = {}) {
    return this.service.post(url, params, header);
  }
}

export default new Axios(config);
