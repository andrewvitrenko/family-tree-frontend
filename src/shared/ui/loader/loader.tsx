import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import { FC, memo } from 'react';

import { mergeSx } from '@/shared/lib';

import { TLoaderProps } from './model/props.model';
import * as styles from './styles';

const Loader: FC<TLoaderProps> = ({ sx, ...props }) => {
  return (
    <Box sx={mergeSx(styles.container, sx)}>
      <CircularProgress {...props} />
    </Box>
  );
};

export default memo(Loader);
