'use client';

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
import { DeleteTree } from '@/views/home/ui';

import { TTreeCardProps } from './model/props.model';
import * as styles from './styles';

const TreeCard: FC<TTreeCardProps> = ({ editable, tree }) => {
  const { toggleEditModal, setTree } = useTreesStore(
    useShallow((state) => ({
      toggleEditModal: state.toggleEditModal,
      setTree: state.setTree,
    })),
  );

  const onEditClick = useCallback(() => {
    setTree(tree);
    toggleEditModal(true);
  }, [setTree, toggleEditModal, tree]);

  const onActionClick = useCallback((e: MouseEvent) => e.preventDefault(), []);

  return (
    <Link href={`${ERoute.TREE}/${tree.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={styles.container}>
        <CardContent>
          <Typography variant="h5">{tree.name}</Typography>
        </CardContent>
        <CardActions sx={styles.actions} onClick={onActionClick}>
          {editable && (
            <IconButton color="primary" onClick={onEditClick}>
              <EditIcon />
            </IconButton>
          )}
          <DeleteTree id={tree.id} name={tree.name} />
        </CardActions>
      </Card>
    </Link>
  );
};

export default memo(TreeCard);
