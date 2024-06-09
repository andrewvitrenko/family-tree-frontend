'use client';

import Box from '@mui/material/Box';
import { FC } from 'react';

import { FullscreenLoader } from '@/components/ui';
import { useUser } from '@/hooks/use-user';

import Toolbar from './components/toolbar';
import TreesList from './components/trees-list';

const Home: FC = () => {
  const { isFetching } = useUser();

  if (isFetching) {
    return <FullscreenLoader />;
  }

  return (
    <Box>
      <Toolbar />
      <TreesList />
    </Box>
  );
};

export default Home;
