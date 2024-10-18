import Box from '@mui/material/Box';
import { FC, memo } from 'react';

import { mergeSx } from '@/shared/lib';

import { TDividerProps } from './model/props.model';
import * as styles from './styles';

const Divider: FC<TDividerProps> = ({ sx }) => {
  return <Box sx={mergeSx(styles.divider, sx)} />;
};

export default memo(Divider);
