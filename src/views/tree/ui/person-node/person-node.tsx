'use client';

import { Box } from '@mui/material';
import { addYears, subYears } from 'date-fns';
import { FC, memo, useMemo } from 'react';

import { TPerson } from '@/entities/trees';
import { MIN_PARENT_AGE } from '@/entities/trees/config/trees.config';
import { TNodeProps } from '@/features/flow/model/node.model';
import AddChild from '@/views/tree/ui/add-child';
import AddParent from '@/views/tree/ui/add-parent';

import Handlers from '../handlers';
import PersonInfo from '../person-info';
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
      <AddParent
        sourceId={id}
        position={position}
        minDate={subYears(data.dateOfBirth, MIN_PARENT_AGE)}
      />
      <Handlers />
      <PersonInfo {...data} />
      <AddChild
        sourceId={id}
        position={position}
        maxDate={addYears(data.dateOfBirth, MIN_PARENT_AGE)}
      />
    </Box>
  );
};

export default memo(PersonNode);
