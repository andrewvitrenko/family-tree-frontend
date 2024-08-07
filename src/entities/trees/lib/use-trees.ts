'use client';

import {
  InfiniteData,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';

import { TTree } from '@/entities/trees';
import { useToast } from '@/features/toast';
import { getNextPageParam } from '@/shared/api/lib';
import { TPaginatedData } from '@/shared/api/model';

import { TreesApi } from '../api';
import { TCreateTreePayload, TUpdateTreePayload } from '../api/model';

type TUpdateTreeProps = {
  id: string;
  payload: TUpdateTreePayload;
};

export type TUseTrees = {
  trees?: TTree[];
  isFetching: boolean;
  isFetchingNextPage: boolean;
  hasNextPage?: boolean;
  isCreating: boolean;
  isDeleting: boolean;
  isUpdating: boolean;
  create: (payload: TCreateTreePayload) => void;
  remove: (id: string) => void;
  update: (props: TUpdateTreeProps) => void;
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<InfiniteData<TPaginatedData<TTree>>>
  >;
};

export const useTrees = (search: string = ''): TUseTrees => {
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
    queryKey: ['trees', { search }],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      TreesApi.getMany({ search, page: pageParam, take: 10 }),
    getNextPageParam: getNextPageParam<TTree>,
  });

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationKey: ['tree.add'],
    mutationFn: (payload: TCreateTreePayload) => TreesApi.create(payload),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: async (tree) => {
      await queryClient.invalidateQueries({
        queryKey: ['trees'],
      });
      toast.success(`TreesApi "${tree.name}" was successfully created`);
    },
  });

  const { mutate: remove, isPending: isDeleting } = useMutation({
    mutationKey: ['tree.remove'],
    mutationFn: (id: string) => TreesApi.remove(id),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: async (tree) => {
      await queryClient.invalidateQueries({ queryKey: ['trees'] });
      toast.success(`TreesApi "${tree.name}" was successfully deleted`);
    },
  });

  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationKey: ['tree.update'],
    mutationFn: ({ id, payload }: TUpdateTreeProps) =>
      TreesApi.update(id, payload),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: async (tree) => {
      toast.success(`TreesApi ${tree.name} was successfully updated`);
      await queryClient.invalidateQueries({ queryKey: ['trees'] });
    },
  });

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error, toast]);

  const trees = useMemo(
    () => data?.pages.map(({ data }) => data).flat(),
    [data],
  );

  return {
    trees,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    isCreating,
    isDeleting,
    isUpdating,
    create,
    remove,
    update,
    fetchNextPage,
  };
};
