import { TTree } from '@/shared/entities/tree';

export type TTreesListContext = {
  setSearch: (value: string) => void;
  openCreateModal: () => void;
  openDeleteModal: (tree: TTree) => void;
  openUpdateModal: (tree: TTree) => void;
};
