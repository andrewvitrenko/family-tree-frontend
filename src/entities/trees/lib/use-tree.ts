'use client';

import { useMutation } from '@tanstack/react-query';

import { TreesApi } from '../api';
import { TUpdateNodePayload } from '../api/model';

type TUpdateNodeProps = {
  treeId: string;
  nodeId: string;
  data: TUpdateNodePayload;
};

export type TUseTree = {
  updateNode: (props: TUpdateNodeProps) => void;
};

export const useTree = () => {
  const { mutate: updateNode } = useMutation({
    mutationKey: ['tree.update'],
    mutationFn: ({ treeId, nodeId, data }: TUpdateNodeProps) =>
      TreesApi.updateNode(treeId, nodeId, data),
  });

  return { updateNode };
};
