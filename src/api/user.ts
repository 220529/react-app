import api from "@/api";

interface UserResponse {
  username?: string;
  email?: string;
  nickName?: string;
  portrait?: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export const login = (params: LoginRequest) => {
  return api.post<LoginResponse>("/auth/login", params);
};

export const signup = (params: LoginRequest) => {
  return api.post<LoginResponse>("/auth/signup", params);
};

export const info = () => {
  return api.get<UserResponse>("/user/info");
};
