import { ESex } from '@/entities/user';

export type TPerson = {
  id: string;
  firstName: string;
  lastName: string;
  sex: ESex;
  dateOfBirth: string;
  dateOfDeath?: string;
  nodeId: string;
};

export type TRelation = {
  id: string;
  parentId: string;
  childId: string;
};

export type TNode = {
  id: string;
  treeId: string;
  person: TPerson;
  x: number;
  y: number;
  parents: TRelation[];
  children: TRelation[];
};

export type TTree = {
  id: string;
  name: string;
  ownerId: string;
  nodes: TNode[];
};
