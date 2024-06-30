import { createContext, useContext } from 'react';

import { TTree } from '@/entities/trees';

export type TTreesListContext = {
  setSearch: (value: string) => void;
  openCreateModal: () => void;
  openDeleteModal: (tree: TTree) => void;
  openUpdateModal: (tree: TTree) => void;
};

export const TreesListContext = createContext<TTreesListContext>({
  setSearch: () => {},
  openCreateModal: () => {},
  openDeleteModal: () => {},
  openUpdateModal: () => {},
});

export const useTreesListContext = () => useContext(TreesListContext);
