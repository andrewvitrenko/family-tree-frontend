import { TTree } from '@/types/tree';

export type TTreesStore = {
  trees: TTree[];
  setTrees: (trees: TTree[]) => void;
};
