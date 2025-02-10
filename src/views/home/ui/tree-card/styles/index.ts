import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
  cursor: 'pointer',

  '&:hover': {
    boxShadow: 'none',
  },
};

export const actions: SxProps<Theme> = {
  justifyContent: 'flex-end',
};
