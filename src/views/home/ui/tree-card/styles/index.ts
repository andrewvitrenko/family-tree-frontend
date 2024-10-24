import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  cursor: 'pointer',

  '&:hover': {
    boxShadow: 'none',
  },
};

export const actions: SxProps<Theme> = {
  justifyContent: 'flex-end',
};
