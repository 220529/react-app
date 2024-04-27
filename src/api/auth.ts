import api from "@/api";

export const login = (params: any) => {
  return api.post("/api/auth/login", params);
};

export const signup = (params: any) => {
  return api.post("/api/auth/signup", params);
};
