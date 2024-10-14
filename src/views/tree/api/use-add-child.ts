import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { TNode } from '@/entities/trees';
import { TreesApi } from '@/entities/trees/api';
import { useToast } from '@/features/toast';
import { EApiKey, TAddRelativeVariables } from '@/views/tree/api/model';
import { Adapter } from '@/views/tree/lib';
import { useTreeStore } from '@/views/tree/store/tree.store';

type TUseAddChild = UseMutationResult<TNode, Error, TAddRelativeVariables>;

export const useAddChild = (): TUseAddChild => {
  const toast = useToast();

  const { onEdgesChange, onNodesChange } = useTreeStore(
    useShallow((state) => ({
      onNodesChange: state.onNodesChange,
      onEdgesChange: state.onEdgesChange,
    })),
  );

  const addChild = useCallback(
    (node: TNode) => {
      onNodesChange([{ type: 'add', item: Adapter.adaptNode(node) }]);

      onEdgesChange(
        node.parents.map((relation) => ({
          type: 'add',
          item: Adapter.adaptEdge(relation),
        })),
      );
    },
    [onEdgesChange, onNodesChange],
  );

  return useMutation<TNode, Error, TAddRelativeVariables>({
    mutationKey: [EApiKey.TREE_ADD_CHILD],
    mutationFn: ({ data, nodeId, treeId }) =>
      TreesApi.addChild(treeId, nodeId, data),
    onError: (err) => toast.error(err.message),
    onSuccess: addChild,
  });
};
