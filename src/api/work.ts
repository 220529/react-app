import api from "@/api";

export interface WorkProps {
  title?: string;
  desc?: string;
  coverImg?: string;
  content?: Record<string, any>;
  isTemplate?: boolean;
  isPublished?: boolean;
}

export const create = (params: WorkProps) => {
  return api.post("/work", params);
};

export const update = (id: string, params: WorkProps) => {
  return api.put(`/work/${id}`, params);
};

export const fetch = (id: string) => {
  return api.get(`/work/${id}`);
};
