import { create } from 'zustand';

import { TTree } from './types';

// create entities for trees and user
// move types of them into `model` files
// rename `utils` into `lib` across the project
// move api for trees and user to entities

type TTreesStore = {
  trees: TTree[];
  setTrees: (trees: TTree[]) => void;
};

export const useTreesStore = create<TTreesStore>((set) => ({
  trees: [],
  setTrees: (trees) => set(() => ({ trees })),
}));
