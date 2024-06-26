import { useMemo } from 'react';
import {
  InfiniteQueryObserverResult,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from 'react-query';

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
    InfiniteQueryObserverResult<TPaginatedData<TTree>>
  >;
};

export const useTrees = (search: string = ''): TUseTrees => {
  const queryClient = useQueryClient();

  const toast = useToast();

  const { data, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['trees', { search }],
      queryFn: ({ pageParam = 1 }) =>
        TreesApi.getMany({ search, page: pageParam, take: 10 }),
      onError: (err) => toast.error((err as Error).message),
      getNextPageParam: getNextPageParam<TTree>,
    });

  const { mutate: create, isLoading: isCreating } = useMutation({
    mutationKey: ['tree.add'],
    mutationFn: (payload: TCreateTreePayload) => TreesApi.create(payload),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: async (tree) => {
      await queryClient.invalidateQueries('trees');
      toast.success(`TreesApi "${tree.name}" was successfully created`);
    },
  });

  const { mutate: remove, isLoading: isDeleting } = useMutation({
    mutationKey: ['tree.remove'],
    mutationFn: (id: string) => TreesApi.remove(id),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: async (tree) => {
      await queryClient.invalidateQueries('trees');
      toast.success(`TreesApi "${tree.name}" was successfully deleted`);
    },
  });

  const { mutate: update, isLoading: isUpdating } = useMutation({
    mutationKey: ['tree.update'],
    mutationFn: ({ id, payload }: TUpdateTreeProps) =>
      TreesApi.update(id, payload),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: async (tree) => {
      toast.success(`TreesApi ${tree.name} was successfully updated`);
      await queryClient.invalidateQueries('trees');
    },
  });

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
