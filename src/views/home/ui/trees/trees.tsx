'use client';

import Box from '@mui/material/Box';
import { FC, memo, useState } from 'react';

import { useTreesList } from '@/views/home/api';

import { List, Toolbar } from '..';
import * as styles from './styles';

const Trees: FC = () => {
  const [search, setSearch] = useState('');

  const { isFetching, isFetchingNextPage, hasNextPage, data, fetchNextPage } =
    useTreesList(search);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Toolbar setDebouncedSearch={setSearch} />
        <List
          trees={data}
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
