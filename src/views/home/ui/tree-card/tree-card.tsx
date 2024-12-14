'use client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { FC, memo, MouseEvent, useCallback } from 'react';

import { ERoute } from '@/shared/model/navigation.model';
import { DeleteTree, EditTree } from '@/views/home/ui';

import { TTreeCardProps } from './model/props.model';
import * as styles from './styles';

const TreeCard: FC<TTreeCardProps> = ({ editable, tree }) => {
  const router = useRouter();

  const onClick = useCallback(
    () => router.push(`${ERoute.TREE}/${tree.id}`),
    [router, tree.id],
  );

  const onActionsClick = useCallback(
    (e: MouseEvent) => e.stopPropagation(),
    [],
  );

  return (
    <Card sx={styles.container} onClick={onClick}>
      <CardContent>
        <Typography variant="h5">{tree.name}</Typography>
      </CardContent>
      <CardActions sx={styles.actions} onClick={onActionsClick}>
        {editable && <EditTree id={tree.id} name={tree.name} />}
        <DeleteTree id={tree.id} name={tree.name} />
      </CardActions>
    </Card>
  );
};

export default memo(TreeCard);
