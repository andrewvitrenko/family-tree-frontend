import {
  TAddRelativePayload,
  TUpdateNodePayload,
} from '@/entities/trees/api/model';

export enum EApiKey {
  TREE_UPDATE = 'tree.update',
  TREE_DELETE = 'tree.delete',
  TREE_ADD_PARENT = 'tree.addParent',
  TREE_ADD_CHILD = 'tree.addChild',
}

export type TUpdateNodeVariables = {
  treeId: string;
  nodeId: string;
  data: TUpdateNodePayload;
};

export type TAddRelativeVariables = {
  treeId: string;
  nodeId: string;
  data: TAddRelativePayload;
};

export type TRemoveNodeVariables = {
  treeId: string;
  nodeId: string;
};
