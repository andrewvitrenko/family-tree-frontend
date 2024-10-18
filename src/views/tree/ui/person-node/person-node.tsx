'use client';

import { Box } from '@mui/material';
import { FC, memo, useMemo } from 'react';

import { TPerson } from '@/entities/trees';
import { TNodeProps } from '@/features/flow/model/node.model';
import AddChild from '@/views/tree/ui/add-child';
import AddParent from '@/views/tree/ui/add-parent';

import Handlers from '../handlers';
import PersonInfo from '../person-info';
import RemoveNode from '../remove-node';
import * as styles from './styles';

const PersonNode: FC<TNodeProps<TPerson>> = ({
  id,
  positionAbsoluteX,
  positionAbsoluteY,
  data,
}) => {
  const position = useMemo(
    () => ({
      x: positionAbsoluteX,
      y: positionAbsoluteY,
    }),
    [positionAbsoluteX, positionAbsoluteY],
  );

  return (
    <Box sx={styles.container}>
      <RemoveNode id={id} firstName={data.firstName} lastName={data.lastName} />
      <AddParent sourceId={id} position={position} />
      <Handlers />
      <PersonInfo {...data} />
      <AddChild sourceId={id} position={position} />
    </Box>
  );
};

export default memo(PersonNode);
