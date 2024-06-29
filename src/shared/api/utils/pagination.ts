import { TPaginatedData } from '../types';

export const getNextPageParam = <T extends object>(
  lastPage: TPaginatedData<T>,
  allPages: TPaginatedData<T>[],
): number | null => {
  const total = lastPage.total;
  const pages = allPages.length;
  const count = allPages.reduce((acc, { data }) => acc + data.length, 0);

  if (count < total) return pages + 1;

  return null;
};
