'use client';

import Box from '@mui/material/Box';
import { useParams } from 'next/navigation';
import { FC, memo, useCallback, useState } from 'react';

import { ESex } from '@/entities/user';
import { useAddParent } from '@/views/tree/api/use-add-parent';
import { TConnectionForm } from '@/views/tree/model/connection-form.model';
import { TRouteParams } from '@/views/tree/model/route.model';

import ConnectionButton from '../connection-button';
import ConnectionModal from '../connection-modal';
import { TAddParentProps } from './model/props.model';
import * as styles from './styles';

const AddParent: FC<TAddParentProps> = ({ position, sourceId }) => {
  const { mutateAsync } = useAddParent();

  const params = useParams<TRouteParams>();

  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onSubmit = useCallback(
    async (data: TConnectionForm) => {
      const x = data.sex === ESex.FEMALE ? position.x - 200 : position.x + 200;
      const y = position.y - 300;

      await mutateAsync({
        treeId: params.id,
        nodeId: sourceId,
        data: { ...data, x, y },
      });
    },
    [mutateAsync, params.id, position.x, position.y, sourceId],
  );

  return (
    <Box sx={styles.container}>
      <ConnectionButton onClick={onOpen} />
      <ConnectionModal onSubmit={onSubmit} open={open} onClose={onClose} />
    </Box>
  );
};

export default memo(AddParent);
