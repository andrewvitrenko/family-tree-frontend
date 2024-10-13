'use client';

import Box from '@mui/material/Box';
import { FC, memo, useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useTrees } from '@/entities/trees';
import { TUpdateTreePayload } from '@/entities/trees/api';
import { useTreesStore } from '@/entities/trees/model';

import { EditTree, List, Toolbar } from '..';
import * as styles from './styles';

const Trees: FC = () => {
  const {
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    trees,
    fetchNextPage,
    update,
  } = useTrees();

  const { currentTree, setTree, editModalOpen, toggleEditModal } =
    useTreesStore(
      useShallow((state) => ({
        currentTree: state.currentTree,
        setTree: state.setTree,
        editModalOpen: state.editModalOpen,
        toggleEditModal: state.toggleEditModal,
      })),
    );

  const closeEditModal = useCallback(() => {
    toggleEditModal(false);
    setTree(null);
  }, [setTree, toggleEditModal]);

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
      <EditTree
        open={editModalOpen}
        onSubmit={editTree}
        onCancel={closeEditModal}
      />
    </>
  );
};

export default memo(Trees);
