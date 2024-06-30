export type TPaginationParams = {
  search?: string;
  page?: number;
  take?: number;
};

export type TPaginatedData<T extends object> = {
  data: T[];
  total: number;
};
