'use client';

import Box from '@mui/material/Box';
import { FC } from 'react';

import { Header } from '@/widgets';

import { Trees } from './ui';

const HomePage: FC = () => {
  return (
    <Box>
      <Header />
      <Trees />
    </Box>
  );
};

export default HomePage;
