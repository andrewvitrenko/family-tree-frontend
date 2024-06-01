import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';
import { FC, memo } from 'react';

import { mergeSx } from '@/utils';

import * as styles from './styles';
import { TModalProps } from './types';

const Modal: FC<TModalProps> = ({ children, sx, contentSx, ...props }) => {
  return (
    <MuiModal {...props} sx={mergeSx(styles.container, sx)}>
      <Box sx={mergeSx(styles.content, contentSx)}>{children}</Box>
    </MuiModal>
  );
};

export default memo(Modal);
