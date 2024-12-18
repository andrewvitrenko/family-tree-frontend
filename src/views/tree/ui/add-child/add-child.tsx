'use client';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { formatISO } from 'date-fns';
import { useParams } from 'next/navigation';
import { FC, memo, useCallback, useState } from 'react';

import { ESex } from '@/entities/user';
import { useAddChild } from '@/views/tree/api/use-add-child';
import { TRouteParams } from '@/views/tree/model/route.model';

import CreateNode, { TCreateNodeForm } from '../create-node';
import { TAddChildProps } from './model/props.model';
import * as styles from './styles';

const AddChild: FC<TAddChildProps> = ({ position, sourceId, maxDate }) => {
  const { mutateAsync } = useAddChild();

  const params = useParams<TRouteParams>();

  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onSubmit = useCallback(
    async ({ dateOfBirth, dateOfDeath, ...data }: TCreateNodeForm) => {
      const x = data.sex === ESex.FEMALE ? position.x - 200 : position.x + 200;
      const y = position.y + 300;

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
      <CreateNode
        onClose={onClose}
        onSubmit={onSubmit}
        open={open}
        maxDate={maxDate}
      />
    </Box>
  );
};

export default memo(AddChild);
