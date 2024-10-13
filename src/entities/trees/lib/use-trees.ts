'use client';

import {
  InfiniteData,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
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
import { TUpdateTreePayload } from '../api/model';

type TUpdateTreeProps = {
  id: string;
  payload: TUpdateTreePayload;
};

export type TUseTrees = {
  trees?: TTree[];
  isFetching: boolean;
  isFetchingNextPage: boolean;
  hasNextPage?: boolean;
  isDeleting: boolean;
  isUpdating: boolean;
  remove: (id: string) => void;
  update: (props: TUpdateTreeProps) => void;
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<InfiniteData<TPaginatedData<TTree>>>
  >;
};

export const useTrees = (): TUseTrees => {
  const { search } = useTreesStore(
    useShallow((state) => ({ search: state.search })),
  );

  const queryClient = useQueryClient();

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

  const { mutate: remove, isPending: isDeleting } = useMutation({
    mutationKey: ['tree.remove'],
    mutationFn: (id: string) => TreesApi.remove(id),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: async (tree) => {
      await queryClient.invalidateQueries({ queryKey: [EApiKey.TREES_LIST] });
      toast.success(`Tree "${tree.name}" was successfully deleted`);
    },
  });

  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationKey: ['tree.update'],
    mutationFn: ({ id, payload }: TUpdateTreeProps) =>
      TreesApi.update(id, payload),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: async (tree) => {
      await queryClient.invalidateQueries({ queryKey: [EApiKey.TREES_LIST] });
      toast.success(`Tree ${tree.name} was successfully updated`);
    },
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
    isDeleting,
    isUpdating,
    remove,
    update,
    fetchNextPage,
  };
};
