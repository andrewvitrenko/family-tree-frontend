'use client';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { FC, memo } from 'react';

import { Button } from '@/shared/ui';

import { TConnectionButtonProps } from './model/props.model';
import * as styles from './styles';

const ConnectionButton: FC<TConnectionButtonProps> = ({ onClick }) => {
  return (
    <Button sx={styles.button} onClick={onClick}>
      <AddRoundedIcon />
    </Button>
  );
};

export default memo(ConnectionButton);
