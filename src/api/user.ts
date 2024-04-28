import api from "@/api";
// import { ResponseProps } from "@/api/response";

export interface UserProps {
  username?: string;
  email?: string;
  nickName?: string;
  portrait?: string;
}

export interface LoginProps {
  username: string;
  password: string;
}

export const login = (params: LoginProps) => {
  return api.post("/auth/login", params);
};

export const signup = (params: LoginProps) => {
  return api.post("/auth/signup", params);
};

export const info = () => {
  return api.get("/user/info");
};
