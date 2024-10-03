import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';

export const button: SxProps<Theme> = {
  width: '2rem',
  height: '2rem',
  borderRadius: '99rem',
  padding: 0,
  minWidth: 'unset',
  backgroundColor: 'primary.light',
  transform: 'scale(0)',
  transition: 'transform 0.3s ease-in-out',
};
