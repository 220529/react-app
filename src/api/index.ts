import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { notification } from "antd";
import { useSelector } from "react-redux";
import store, { RootState } from "@/store";

const config: AxiosRequestConfig = {
  baseURL: process.env.NODE_ENV === "development" ? "/api" : "http://47.93.17.251:9005/api",
  timeout: 5000,
  withCredentials: true,
};

class Axios {
  private service: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);
    this.initInterceptors();
  }

  private initInterceptors() {
    // 请求拦截器
    this.service.interceptors.request.use(
      config => {
        // 在发送请求之前做些什么，比如添加公共请求头
        const { user } = store.getState();
        // 检查是否有 token，如果有，则将其添加到请求头中
        if (user.access_token) {
          config.headers["Authorization"] = `Bearer ${user.access_token}`;
        }
        return config;
      },
      error => {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.service.interceptors.response.use(
      response => this.handleResponse(response),
      error => {
        // 对响应错误做些什么
        if (error.response) {
          // 服务器返回了错误响应
          return this.handleResponse(error.response);
        } else {
          // 未收到服务器响应，可能是网络错误等
          return Promise.reject(error);
        }
      }
    );
  }

  private handleResponse(response: AxiosResponse) {
    if (response.status === 200) {
      // 如果响应正常，则返回数据部分
      return Promise.resolve(response.data.data);
    } else {
      // 如果响应异常，则显示错误通知
      notification.error({
        message: "Error",
        description: response.data.data?.message || "未知错误",
      });
      return Promise.resolve(response.data.data);
    }
  }

  get(url: string, params?: object, headers?: object) {
    return this.service.get(url, { params, headers });
  }

  post(url: string, data?: object, headers?: object) {
    return this.service.post(url, data, { headers });
  }
}

export default new Axios(config);
