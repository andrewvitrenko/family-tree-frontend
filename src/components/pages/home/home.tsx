'use client';

import Box from '@mui/material/Box';
import { FC } from 'react';

import Toolbar from './components/toolbar';
import TreesList from './components/trees-list';

const Home: FC = () => {
  return (
    <Box>
      <Toolbar />
      <TreesList />
    </Box>
  );
};

export default Home;
