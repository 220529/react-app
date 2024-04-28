import api from "@/api";

export const login = (params: any) => {
  return api.post("/auth/login", params);
};

export const signup = (params: any) => {
  return api.post("/auth/signup", params);
};

export const info = () => {
  return api.get("/user/info");
};

export interface UserProps {
  username?: string;
  email?: string;
  nickName?: string;
  portrait?: string;
}
