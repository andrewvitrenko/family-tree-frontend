'use client';

import {
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';

import { TTree } from '@/entities/trees';
import { TreesApi } from '@/entities/trees/api';
import { useToast } from '@/features/toast';
import { TPaginatedData } from '@/shared/api';
import { getNextPageParam } from '@/shared/api/lib';
import { EApiKey } from '@/views/home/api/model';

type TUseTreesList = Omit<
  UseInfiniteQueryResult<InfiniteData<TPaginatedData<TTree>>, Error>,
  'data'
> & {
  data?: TTree[];
};

export const useTreesList = (search: string): TUseTreesList => {
  const toast = useToast();

  const { data, error, ...queryResult } = useInfiniteQuery({
    queryKey: [EApiKey.TREES_LIST, { search }],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      TreesApi.getMany({ search, page: pageParam, take: 10 }),
    getNextPageParam: getNextPageParam<TTree>,
  });

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error, toast]);

  const trees = useMemo(
    () => data?.pages.map(({ data }) => data).flat(),
    [data?.pages],
  );

  return { data: trees, error, ...queryResult };
};
