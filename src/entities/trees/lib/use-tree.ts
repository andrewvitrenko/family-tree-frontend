'use client';

import { useMutation } from '@tanstack/react-query';

import { TreesApi } from '../api';
import { TAddRelativePayload, TUpdateNodePayload } from '../api/model';

type TUpdateNodeProps = {
  treeId: string;
  nodeId: string;
  data: TUpdateNodePayload;
};

type TAddRelativeProps = {
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
  const { mutate: updateNode, isPending: isUpdating } = useMutation({
    mutationKey: ['tree.update'],
    mutationFn: ({ treeId, nodeId, data }: TUpdateNodeProps) =>
      TreesApi.updateNode(treeId, nodeId, data),
  });

  const { mutate: addParent, isPending: isAddingParent } = useMutation({
    mutationKey: ['tree.addParent'],
    mutationFn: ({ treeId, data, sourceId }: TAddRelativeProps) =>
      TreesApi.addParent(treeId, sourceId, data),
  });

  const { mutate: addChild, isPending: isAddingChild } = useMutation({
    mutationKey: ['tree.addChild'],
    mutationFn: ({ treeId, data, sourceId }: TAddRelativeProps) =>
      TreesApi.addChild(treeId, sourceId, data),
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
