import { TTree } from '@/types/tree';

export type TTreesListContext = {
  setSearch: (value: string) => void;
  openCreateModal: () => void;
  openDeleteModal: (tree: TTree) => void;
  openUpdateModal: (tree: TTree) => void;
};
