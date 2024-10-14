'use client';

import {
  InfiniteData,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { TTree } from '@/entities/trees';
import { useTreesStore } from '@/entities/trees/model';
import { useToast } from '@/features/toast';
import { getNextPageParam } from '@/shared/api/lib';
import { TPaginatedData } from '@/shared/api/model';
import { EApiKey } from '@/views/home/api/model';

import { TreesApi } from '../api';

export type TUseTrees = {
  trees?: TTree[];
  isFetching: boolean;
  isFetchingNextPage: boolean;
  hasNextPage?: boolean;
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<InfiniteData<TPaginatedData<TTree>>>
  >;
};

export const useTrees = (): TUseTrees => {
  const { search } = useTreesStore(
    useShallow((state) => ({ search: state.search })),
  );

  const toast = useToast();

  const {
    data,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    error,
    fetchNextPage,
  } = useInfiniteQuery({
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

  return {
    trees,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
};
