'use client';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { TNode } from '@/entities/trees';
import { TreesApi } from '@/entities/trees/api';
import { useToast } from '@/features/toast';
import { EApiKey, TRemoveNodeVariables } from '@/views/tree/api/model';
import { useTreeStore } from '@/views/tree/store/tree.store';

type TUseRemoveNode = UseMutationResult<TNode, Error, TRemoveNodeVariables>;

export const useRemoveNode = (): TUseRemoveNode => {
  const toast = useToast();

  const { onNodesChange } = useTreeStore(
    useShallow((state) => ({ onNodesChange: state.onNodesChange })),
  );

  const removeNode = useCallback(
    (node: TNode) => {
      onNodesChange([{ type: 'remove', id: node.id }]);
    },
    [onNodesChange],
  );

  return useMutation<TNode, Error, TRemoveNodeVariables>({
    mutationKey: [EApiKey.TREE_DELETE],
    mutationFn: ({ nodeId, treeId }) => TreesApi.removeNode(treeId, nodeId),
    onError: (err) => toast.error(err.message),
    onSuccess: removeNode,
  });
};
