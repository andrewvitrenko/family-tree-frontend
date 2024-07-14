'use client';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FC, memo, useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useTreesStore } from '@/entities/trees/model';

import { TTreeCardProps } from './model/props.model';
import * as styles from './styles';

const TreeCard: FC<TTreeCardProps> = ({ editable, tree }) => {
  const { toggleDeleteModal, toggleEditModal, setTree } = useTreesStore(
    useShallow((state) => ({
      toggleEditModal: state.toggleEditModal,
      toggleDeleteModal: state.toggleDeleteModal,
      setTree: state.setTree,
    })),
  );

  const onDeleteClick = useCallback(() => {
    setTree(tree);
    toggleDeleteModal(true);
  }, [toggleDeleteModal, setTree, tree]);

  const onEditClick = useCallback(() => {
    setTree(tree);
    toggleEditModal(true);
  }, [setTree, toggleEditModal, tree]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{tree.name}</Typography>
      </CardContent>
      <CardActions sx={styles.actions}>
        {editable && (
          <IconButton color="primary" onClick={onEditClick}>
            <EditIcon />
          </IconButton>
        )}
        <IconButton color="warning" onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default memo(TreeCard);
