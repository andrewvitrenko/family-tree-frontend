'use client';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC, memo, MouseEvent, useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useTreesStore } from '@/entities/trees/model';
import { ERoute } from '@/shared/model/navigation.model';

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

  const onDeleteClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setTree(tree);
      toggleDeleteModal(true);
    },
    [toggleDeleteModal, setTree, tree],
  );

  const onEditClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setTree(tree);
      toggleEditModal(true);
    },
    [setTree, toggleEditModal, tree],
  );

  return (
    <Link href={`${ERoute.TREE}/${tree.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={styles.container}>
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
    </Link>
  );
};

export default memo(TreeCard);
