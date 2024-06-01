import { ESex, TUser } from '@/types/user';

export type TParentRelationship = {
  id: string;
  parent: TUser;
  child: TUser;
};

export type TSpouseRelationship = {
  id: string;
  wife: TUser;
  husband: TUser;
};

export type TPerson = {
  id: string;
  firstName: string;
  lastName: string;
  sex: ESex;
  dateOfBirth: string;
  dateOfDeath?: string;
  treeId: string;
  userId?: string;
  parents: TParentRelationship[];
  children: TParentRelationship[];
  wife?: TSpouseRelationship;
  husband?: TSpouseRelationship;
};

export type TTree = {
  id: string;
  name: string;
  ownerId: string;
  people: TPerson[];
};
