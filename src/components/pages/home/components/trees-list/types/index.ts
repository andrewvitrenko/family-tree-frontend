import { TTree } from '@/entities/trees';

export type TTreesListContext = {
  setSearch: (value: string) => void;
  openCreateModal: () => void;
  openDeleteModal: (tree: TTree) => void;
  openUpdateModal: (tree: TTree) => void;
};
