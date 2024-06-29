import {
  InfiniteQueryObserverResult,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from 'react-query';
import { useShallow } from 'zustand/react/shallow';

import { useToast } from '@/features/toast';
import { TTree } from '@/shared/entities/tree';
import { useTreesStore } from '@/store/trees';
import { TCreateTreePayload, TUpdateTreePayload } from '@/types/api/tree';

import { TPaginatedData } from '../types';
import { getNextPageParam } from '../utils';
import { TreesApi } from './api';

type TUpdateTreeProps = {
  id: string;
  payload: TUpdateTreePayload;
};

export type TUseTrees = {
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
  const { setTrees } = useTreesStore(
    useShallow((state) => ({ setTrees: state.setTrees })),
  );

  const { isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['trees', { search }],
      queryFn: ({ pageParam = 1 }) =>
        TreesApi.getMany({ search, page: pageParam, take: 10 }),
      onError: (err) => toast.error((err as Error).message),
      getNextPageParam: getNextPageParam<TTree>,
      onSuccess: ({ pages }) => setTrees(pages.map(({ data }) => data).flat()),
      notifyOnChangeProps: 'tracked',
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

  return {
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
