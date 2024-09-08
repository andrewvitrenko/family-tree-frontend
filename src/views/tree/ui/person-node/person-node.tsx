'use client';

import { Box } from '@mui/material';
import { FC, memo } from 'react';

import { TPerson } from '@/entities/trees';
import { TNodeProps } from '@/features/flow/model/node.model';

import ConnectionButton from '../connection-button';
import Handlers from '../handlers';
import PersonInfo from '../person-info';
import * as styles from './styles';

const PersonNode: FC<TNodeProps<TPerson>> = ({ id, data }) => {
  return (
    <Box sx={styles.container}>
      <Handlers />
      <ConnectionButton
        sx={styles.addParentButton}
        connectionType="parent"
        sourceId={id}
      />
      <PersonInfo {...data} />
      <ConnectionButton
        sx={styles.addChildButton}
        connectionType="child"
        sourceId={id}
      />
    </Box>
  );
};

export default memo(PersonNode);
