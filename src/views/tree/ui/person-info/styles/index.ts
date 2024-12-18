import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  width: '15rem',
  height: '15rem',
  borderRadius: '0.5rem',
  transition: 'box-shadow 0.3s ease-in-out',
};

export const divider: SxProps<Theme> = {
  my: '0.5rem',
};
