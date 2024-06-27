import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import { FC, memo } from 'react';

import { mergeSx } from '@/utils';

import * as styles from './styles';
import { TLoaderProps } from './types';

const Loader: FC<TLoaderProps> = ({ sx, ...props }) => {
  return (
    <Box sx={mergeSx(styles.container, sx)}>
      <CircularProgress {...props} />
    </Box>
  );
};

export default memo(Loader);
