'use client';

import Box from '@mui/material/Box';
import { FC, memo, useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useTrees } from '@/entities/trees';
import { TCreateTreePayload, TUpdateTreePayload } from '@/entities/trees/api';
import { useTreesStore } from '@/entities/trees/model';
import { FullscreenLoader } from '@/widgets';

import { CreateTree, DeleteTree, EditTree, List, Toolbar } from '..';
import * as styles from './styles';

const Trees: FC = () => {
  const { isCreating, isDeleting, isUpdating, create, remove, update } =
    useTrees();

  const {
    currentTree,
    setTree,
    createModalOpen,
    deleteModalOpen,
    editModalOpen,
    toggleCreateModal,
    toggleDeleteModal,
    toggleEditModal,
  } = useTreesStore(
    useShallow((state) => ({
      currentTree: state.currentTree,
      setTree: state.setTree,
      createModalOpen: state.createModalOpen,
      editModalOpen: state.editModalOpen,
      deleteModalOpen: state.deleteModalOpen,
      toggleCreateModal: state.toggleCreatModal,
      toggleEditModal: state.toggleEditModal,
      toggleDeleteModal: state.toggleDeleteModal,
    })),
  );

  const closeCreateModal = useCallback(
    () => toggleCreateModal(false),
    [toggleCreateModal],
  );

  const closeDeleteModal = useCallback(() => {
    toggleDeleteModal(false);
    setTree(null);
  }, [setTree, toggleDeleteModal]);

  const closeEditModal = useCallback(() => {
    toggleEditModal(false);
    setTree(null);
  }, [setTree, toggleEditModal]);

  const createTree = useCallback(
    (payload: TCreateTreePayload) => {
      toggleCreateModal(false);
      create(payload);
    },
    [create, toggleCreateModal],
  );

  const deleteTree = useCallback(() => {
    if (!currentTree) return;

    toggleDeleteModal(false);
    remove(currentTree.id);
    setTree(null);
  }, [currentTree, setTree, remove, toggleDeleteModal]);

  const editTree = useCallback(
    (payload: TUpdateTreePayload) => {
      if (!currentTree) return;

      toggleEditModal(false);
      update({ id: currentTree.id, payload });
    },
    [update, currentTree, toggleEditModal],
  );

  return (
    <>
      <Box sx={styles.wrapper}>
        <Box sx={styles.container}>
          <Toolbar />
          <List />
        </Box>
      </Box>
      <CreateTree
        open={createModalOpen}
        onSubmit={createTree}
        onCancel={closeCreateModal}
      />
      <DeleteTree
        open={deleteModalOpen}
        onCancel={closeDeleteModal}
        onSubmit={deleteTree}
      />
      <EditTree
        open={editModalOpen}
        onSubmit={editTree}
        onCancel={closeEditModal}
      />
      {(isCreating || isDeleting || isUpdating) && <FullscreenLoader />}
    </>
  );
};

export default memo(Trees);
