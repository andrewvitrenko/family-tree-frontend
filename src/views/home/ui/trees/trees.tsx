'use client';

import Box from '@mui/material/Box';
import { FC, memo, useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useTrees } from '@/entities/trees';
import { TUpdateTreePayload } from '@/entities/trees/api';
import { useTreesStore } from '@/entities/trees/model';

import { DeleteTree, EditTree, List, Toolbar } from '..';
import * as styles from './styles';

const Trees: FC = () => {
  const {
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    trees,
    fetchNextPage,
    remove,
    update,
  } = useTrees();

  const {
    currentTree,
    setTree,
    deleteModalOpen,
    editModalOpen,
    toggleDeleteModal,
    toggleEditModal,
  } = useTreesStore(
    useShallow((state) => ({
      currentTree: state.currentTree,
      setTree: state.setTree,
      editModalOpen: state.editModalOpen,
      deleteModalOpen: state.deleteModalOpen,
      toggleEditModal: state.toggleEditModal,
      toggleDeleteModal: state.toggleDeleteModal,
    })),
  );

  const closeDeleteModal = useCallback(() => {
    toggleDeleteModal(false);
    setTree(null);
  }, [setTree, toggleDeleteModal]);

  const closeEditModal = useCallback(() => {
    toggleEditModal(false);
    setTree(null);
  }, [setTree, toggleEditModal]);

  const deleteTree = useCallback(() => {
    if (!currentTree) return;

    toggleDeleteModal(false);
    remove(currentTree.id);
    setTree(null);
  }, [currentTree, setTree, toggleDeleteModal, remove]);

  const editTree = useCallback(
    (payload: TUpdateTreePayload) => {
      if (!currentTree) return;

      toggleEditModal(false);
      update({ id: currentTree.id, payload });
    },
    [currentTree, toggleEditModal, update],
  );

  return (
    <>
      <Box sx={styles.wrapper}>
        <Box sx={styles.container}>
          <Toolbar />
          <List
            trees={trees}
            isFetching={isFetching}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        </Box>
      </Box>
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
    </>
  );
};

export default memo(Trees);
