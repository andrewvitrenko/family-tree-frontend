import { create } from 'zustand';

import { TTreesStore } from '@/types/store/trees';

export const useTreesStore = create<TTreesStore>((set) => ({
  trees: [],
  setTrees: (trees) => set(() => ({ trees })),
}));
