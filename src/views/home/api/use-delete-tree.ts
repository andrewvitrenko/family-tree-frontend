import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';

import { TTree } from '@/entities/trees';
import { TreesApi } from '@/entities/trees/api/trees';
import { useToast } from '@/features/toast';
import { EApiKey } from '@/views/home/api/model';

type TUseDeleteTree = UseMutationResult<TTree, Error, void>;

export const useDeleteTree = (id: string): TUseDeleteTree => {
  const queryClient = useQueryClient();

  const toast = useToast();

  return useMutation({
    mutationKey: [EApiKey.TREES_DELETE],
    mutationFn: () => TreesApi.remove(id),
    onError: (err) => toast.error(err.message),
    onSuccess: async (tree) => {
      await queryClient.invalidateQueries({ queryKey: [EApiKey.TREES_LIST] });
      toast.success(`Tree "${tree.name}" was successfully deleted`);
    },
  });
};
