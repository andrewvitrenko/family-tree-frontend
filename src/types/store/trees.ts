import { TTree } from '@/shared/entities/tree';

export type TTreesStore = {
  trees: TTree[];
  setTrees: (trees: TTree[]) => void;
};
