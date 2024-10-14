import { create } from 'zustand';

type TTreesStore = {
  search: string;
  setSearch: (search: string) => void;
};

export const useTreesStore = create<TTreesStore>((set) => ({
  search: '',
  setSearch: (search: string) => set(() => ({ search })),
}));
