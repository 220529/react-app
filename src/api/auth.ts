import api from "@/api";

export const signup = (params: any) => {
  return api.post("/api/auth/signup", params);
};

console.log("api", api);
