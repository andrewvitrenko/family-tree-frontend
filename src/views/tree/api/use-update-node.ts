import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { TNode } from '@/entities/trees';
import { TreesApi } from '@/entities/trees/api';
import { useToast } from '@/features/toast';
import { EApiKey, TUpdateNodeVariables } from '@/views/tree/api/model';
import { Adapter } from '@/views/tree/lib';
import { useTreeStore } from '@/views/tree/store/tree.model';

type TUseUpdateNode = UseMutationResult<TNode, Error, TUpdateNodeVariables>;

export const useUpdateNode = (): TUseUpdateNode => {
  const toast = useToast();

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
      TreesApi.updateNode(treeId, nodeId, data),
    onError: (err) => toast.error(err.message),
    onSuccess: updateNode,
  });
};