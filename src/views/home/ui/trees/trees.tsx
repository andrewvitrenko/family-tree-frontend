'use client';

import Box from '@mui/material/Box';
import { FC, memo } from 'react';

import { useTrees } from '@/entities/trees';

import { List, Toolbar } from '..';
import * as styles from './styles';

const Trees: FC = () => {
  const { isFetching, isFetchingNextPage, hasNextPage, trees, fetchNextPage } =
    useTrees();

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Toolbar />
        <List
          trees={trees}
          isFetching={isFetching}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </Box>
    </Box>
  );
};

export default memo(Trees);
