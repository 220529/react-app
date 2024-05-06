import api from "@/api";
import { PageSettingProps, ComponentNodeProps } from "@/types/component";

interface WorkRequest {
  title: string;
  desc: string;
  coverImg?: string;
  content: Record<string, any>;
  isTemplate?: boolean;
  isPublished?: boolean;
}

interface WorkResponse {
  _id: string;
  title: string;
  desc: string;
  content: {
    components: ComponentNodeProps[];
    props: PageSettingProps;
  };
}

export const create = (params: WorkRequest) => {
  return api.post<WorkResponse>("/work", params);
};

export const update = (id: string, params: WorkRequest) => {
  return api.put(`/work/${id}`, params);
};

export const fetch = (id: string) => {
  return api.get<WorkResponse>(`/work/${id}`);
};
