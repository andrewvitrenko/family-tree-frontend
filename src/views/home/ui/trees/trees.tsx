'use client';

import { FC, memo, useState } from 'react';

import { useTreesList } from '@/views/home/api';

import { List, Toolbar } from '..';

export const Trees: FC = memo(() => {
  const [search, setSearch] = useState('');

  const { isFetching, isFetchingNextPage, hasNextPage, data, fetchNextPage } =
    useTreesList(search);

  return (
    <div className="mt-10 px-4 pb-4">
      <div className="mx-auto max-w-7xl">
        <Toolbar setDebouncedSearch={setSearch} />
        <List
          trees={data}
          isFetching={isFetching}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </div>
    </div>
  );
});

Trees.displayName = 'Trees';
