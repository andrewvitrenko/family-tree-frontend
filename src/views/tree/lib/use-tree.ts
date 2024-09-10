'use client';

import { useMutation } from '@tanstack/react-query';
import { EdgeChange } from '@xyflow/react';
import { useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { TNode } from '@/entities/trees';
import { useTreeStore } from '@/views/tree/model/store.model';

import { TreesApi } from '../../../entities/trees/api';
import {
  TAddRelativePayload,
  TUpdateNodePayload,
} from '../../../entities/trees/api/model';
import { Adapter } from './adapter';

type TUpdateNodeProps = {
  treeId: string;
  nodeId: string;
  data: TUpdateNodePayload;
};

export type TAddRelativeProps = {
  treeId: string;
  sourceId: string;
  data: TAddRelativePayload;
};

export type TUseTree = {
  updateNode: (props: TUpdateNodeProps) => void;
  isUpdating: boolean;
  addParent: (props: TAddRelativeProps) => void;
  isAddingParent: boolean;
  addChild: (props: TAddRelativeProps) => void;
  isAddingChild: boolean;
};

export const useTree = (): TUseTree => {
  const { onNodesChange, onEdgesChange } = useTreeStore(
    useShallow((state) => ({
      onNodesChange: state.onNodesChange,
      onEdgesChange: state.onEdgesChange,
    })),
  );

  const addNode = useCallback(
    (node: TNode) => {
      onNodesChange([{ type: 'add', item: Adapter.adaptNode(node) }]);

      const edgeChanges: EdgeChange[] = node.children.map((child) => ({
        type: 'add',
        item: Adapter.adaptEdge({
          id: child.id,
          parentId: node.id,
          childId: child.id,
        }),
      }));

      onEdgesChange(edgeChanges);
    },
    [onEdgesChange, onNodesChange],
  );

  const { mutate: updateNode, isPending: isUpdating } = useMutation({
    mutationKey: ['tree.update'],
    mutationFn: ({ treeId, nodeId, data }: TUpdateNodeProps) =>
      TreesApi.updateNode(treeId, nodeId, data),
  });

  const { mutate: addParent, isPending: isAddingParent } = useMutation({
    mutationKey: ['tree.addParent'],
    mutationFn: ({ treeId, data, sourceId }: TAddRelativeProps) =>
      TreesApi.addParent(treeId, sourceId, data),
    onSuccess: addNode,
  });

  const { mutate: addChild, isPending: isAddingChild } = useMutation({
    mutationKey: ['tree.addChild'],
    mutationFn: ({ treeId, data, sourceId }: TAddRelativeProps) =>
      TreesApi.addChild(treeId, sourceId, data),
    onSuccess: addNode,
  });

  return {
    updateNode,
    isUpdating,
    addParent,
    isAddingParent,
    addChild,
    isAddingChild,
  };
};
