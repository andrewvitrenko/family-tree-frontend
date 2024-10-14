import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';

import { TTree } from '@/entities/trees';
import { TCreateTreePayload, TreesApi } from '@/entities/trees/api';
import { useToast } from '@/features/toast';
import { EApiKey } from '@/views/home/api/model';

type TUseCreateTree = UseMutationResult<TTree, Error, TCreateTreePayload>;

export const useCreateTree = (): TUseCreateTree => {
  const queryClient = useQueryClient();

  const toast = useToast();

  return useMutation({
    mutationKey: [EApiKey.TREES_ADD],
    mutationFn: (payload) => TreesApi.create(payload),
    onError: (err) => toast.error(err.message),
    onSuccess: async (tree) => {
      await queryClient.invalidateQueries({ queryKey: [EApiKey.TREES_LIST] });
      toast.success(`Tree "${tree.name}" was successfully created`);
    },
  });
};
