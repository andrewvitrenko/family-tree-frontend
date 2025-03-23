import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { toast } from 'sonner';

import { TTree } from '@/entities/trees';
import { TreesApi } from '@/entities/trees/api/trees';
import { EApiKey } from '@/views/home/api/model';

type TUseDeleteTree = UseMutationResult<TTree, Error, void>;

export const useDeleteTree = (id: string): TUseDeleteTree => {
  const queryClient = useQueryClient();

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
