import { create } from 'zustand';

import { TTree } from '@/entities/trees';

type TTreesStore = {
  search: string;
  setSearch: (search: string) => void;
  createModalOpen: boolean;
  toggleCreatModal: (value: boolean) => void;
  editModalOpen: boolean;
  toggleEditModal: (value: boolean) => void;
  deleteModalOpen: boolean;
  toggleDeleteModal: (value: boolean) => void;
  currentTree: TTree | null;
  setTree: (tree: TTree | null) => void;
};

export const useTreesStore = create<TTreesStore>((set) => ({
  search: '',
  createModalOpen: false,
  editModalOpen: false,
  deleteModalOpen: false,
  currentTree: null,
  setSearch: (search: string) => set(() => ({ search })),
  setTree: (tree: TTree | null) => set(() => ({ currentTree: tree })),
  toggleCreatModal: (value: boolean) => set(() => ({ createModalOpen: value })),
  toggleEditModal: (value: boolean) => set(() => ({ editModalOpen: value })),
  toggleDeleteModal: (value: boolean) =>
    set(() => ({ deleteModalOpen: value })),
}));
