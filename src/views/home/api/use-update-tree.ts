import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';

import { TTree } from '@/entities/trees';
import { TreesApi, TUpdateTreePayload } from '@/entities/trees/api/trees';
import { useToast } from '@/features/toast';
import { EApiKey } from '@/views/home/api/model';

type TUseUpdateTree = UseMutationResult<TTree, Error, TUpdateTreePayload>;

export const useUpdateTree = (id: string): TUseUpdateTree => {
  const queryClient = useQueryClient();

  const toast = useToast();

  return useMutation({
    mutationKey: [EApiKey.TREES_UPDATE],
    mutationFn: (payload) => TreesApi.update(id, payload),
    onError: (err) => toast.error(err.message),
    onSuccess: async (tree) => {
      await queryClient.invalidateQueries({ queryKey: [EApiKey.TREES_LIST] });
      toast.success(`Tree "${tree.name}" was successfully updated`);
    },
  });
};
