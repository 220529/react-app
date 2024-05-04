import api from "@/api/index";

export interface OssResponse {
  url: string;
  fileName: string;
}

// 上传文件请求方法
export const upload = <T>(params: FormData) => {
  return api.post<T>("/oss/upload", params, {
    "Content-Type": "multipart/form-data", // 设置请求头
    // 其他请求头
  });
};
