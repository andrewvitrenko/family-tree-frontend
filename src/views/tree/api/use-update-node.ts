import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useCallback } from 'react';
import { toast } from 'sonner';
import { useShallow } from 'zustand/react/shallow';

import { TNode } from '@/entities/trees';
import { NodesApi } from '@/entities/trees/api/nodes';
import { EApiKey, TUpdateNodeVariables } from '@/views/tree/api/model';
import { Adapter } from '@/views/tree/lib';
import { useTreeStore } from '@/views/tree/store/tree.store';

type TUseUpdateNode = UseMutationResult<TNode, Error, TUpdateNodeVariables>;

export const useUpdateNode = (): TUseUpdateNode => {
  const { onNodesChange } = useTreeStore(
    useShallow((state) => ({ onNodesChange: state.onNodesChange })),
  );

  const updateNode = useCallback(
    (node: TNode) => {
      onNodesChange([
        { type: 'replace', id: node.id, item: Adapter.adaptNode(node) },
      ]);
    },
    [onNodesChange],
  );

  return useMutation<TNode, Error, TUpdateNodeVariables>({
    mutationKey: [EApiKey.TREE_UPDATE],
    mutationFn: ({ data, nodeId, treeId }) =>
      NodesApi.update(treeId, nodeId, data),
    onError: (err) => toast.error(err.message),
    onSuccess: updateNode,
  });
};
