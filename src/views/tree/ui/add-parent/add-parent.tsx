'use client';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { formatISO } from 'date-fns';
import { useParams } from 'next/navigation';
import { FC, memo, useCallback, useState } from 'react';

import { ESex } from '@/entities/user';
import { useAddParent } from '@/views/tree/api/use-add-parent';
import { TRouteParams } from '@/views/tree/model/route.model';

import CreateNode, { TCreateNodeForm } from '../create-node';
import { TAddParentProps } from './model/props.model';
import * as styles from './styles';

const AddParent: FC<TAddParentProps> = ({ position, sourceId }) => {
  const { mutateAsync } = useAddParent();

  const params = useParams<TRouteParams>();

  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onSubmit = useCallback(
    async ({ dateOfBirth, dateOfDeath, ...data }: TCreateNodeForm) => {
      const x = data.sex === ESex.FEMALE ? position.x - 200 : position.x + 200;
      const y = position.y - 300;

      await mutateAsync({
        treeId: params.id,
        nodeId: sourceId,
        data: {
          ...data,
          x,
          y,
          dateOfBirth: formatISO(dateOfBirth),
          dateOfDeath: dateOfDeath && formatISO(dateOfDeath),
        },
      });
    },
    [mutateAsync, params.id, position.x, position.y, sourceId],
  );

  return (
    <Box sx={styles.container}>
      <IconButton sx={styles.trigger} onClick={onOpen}>
        <AddRoundedIcon />
      </IconButton>
      <CreateNode onSubmit={onSubmit} open={open} onClose={onClose} />
    </Box>
  );
};

export default memo(AddParent);
