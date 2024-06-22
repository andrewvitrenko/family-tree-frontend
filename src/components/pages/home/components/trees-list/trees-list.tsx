import Box from '@mui/material/Box';
import {
  createContext,
  FC,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import {
  CreateTreeModal,
  DeleteTreeModal,
  UpdateTreeModal,
} from '@/components/modals/tree';
import { FullscreenLoader } from '@/components/ui';
import { useTrees } from '@/hooks/use-trees';
import { TCreateTreePayload, TUpdateTreePayload } from '@/types/api/tree';
import { TTree } from '@/types/tree';

import List from './components/list';
import Toolbar from './components/toolbar';
import * as styles from './styles';
import { TTreesListContext } from './types';

const TreesListContext = createContext<TTreesListContext>({
  setSearch: () => {},
  openCreateModal: () => {},
  openDeleteModal: () => {},
  openUpdateModal: () => {},
});

export const useTreesListContext = () => useContext(TreesListContext);

const TreesList: FC = () => {
  const [search, setSearch] = useState('');
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [currentTree, setCurrentTree] = useState<TTree | null>(null);

  const { isCreating, isDeleting, isUpdating, create, remove, update } =
    useTrees(search);

  const openCreateModal = useCallback(() => setCreateModalOpen(true), []);
  const closeCreateModal = useCallback(() => setCreateModalOpen(false), []);

  const openDeleteModal = useCallback((tree: TTree) => {
    setCurrentTree(tree);
    setDeleteModalOpen(true);
  }, []);

  const closeDeleteModal = useCallback(() => {
    setDeleteModalOpen(false);
    setCurrentTree(null);
  }, []);

  const openUpdateModal = useCallback((tree: TTree) => {
    setCurrentTree(tree);
    setUpdateModalOpen(true);
  }, []);

  const closeUpdateModal = useCallback(() => {
    setUpdateModalOpen(false);
    setCurrentTree(null);
  }, []);

  const createTree = useCallback(
    (payload: TCreateTreePayload) => {
      setCreateModalOpen(false);
      create(payload);
    },
    [create],
  );

  const deleteTree = useCallback(() => {
    if (!currentTree) return;

    setDeleteModalOpen(false);
    remove(currentTree.id);
    setCurrentTree(null);
  }, [currentTree, remove]);

  const updateTree = useCallback(
    (payload: TUpdateTreePayload) => {
      if (!currentTree) return;

      setUpdateModalOpen(false);
      update({ id: currentTree.id, payload });
    },
    [update, currentTree],
  );

  const value: TTreesListContext = useMemo(
    () => ({ setSearch, openCreateModal, openDeleteModal, openUpdateModal }),
    [openCreateModal, openDeleteModal, openUpdateModal],
  );

  return (
    <TreesListContext.Provider value={value}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.container}>
          <Toolbar />
          <List />
        </Box>
      </Box>
      <CreateTreeModal
        open={createModalOpen}
        onSubmit={createTree}
        onCancel={closeCreateModal}
      />
      <DeleteTreeModal
        open={deleteModalOpen}
        onCancel={closeDeleteModal}
        onSubmit={deleteTree}
        name={currentTree?.name}
      />
      <UpdateTreeModal
        open={updateModalOpen}
        onSubmit={updateTree}
        onCancel={closeUpdateModal}
        name={currentTree?.name}
      />
      {(isCreating || isDeleting || isUpdating) && <FullscreenLoader />}
    </TreesListContext.Provider>
  );
};

export default memo(TreesList);
