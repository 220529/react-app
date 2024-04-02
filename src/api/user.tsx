import { ResponseProps } from "@/api/response";

export interface UserProps {
  id?: number;
}

export const fetchById = (id: number): Promise<ResponseProps<UserProps>> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        state: 1,
        content: { id },
      });
    }, 2000);
  });
};
