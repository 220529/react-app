export interface ListData<T> {
  list: T[];
  total: number;
  pageNo: number;
  pageSize: number;
}

export interface ResponseProps<T = {}> {
  data: T;
  state: number;
}
export interface ResponseListProps<T> {
  data: ListData<T>;
  state: number;
}
