export interface ListData<T> {
  list: T[];
  total: number;
  pageNo: number;
  pageSize: number;
}

export interface ApiResponse<T> {
  data: T;
  code: number;
  message: string;
  state: number;
}
