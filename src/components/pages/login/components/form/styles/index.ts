import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

export const button: SxProps<Theme> = {
  marginTop: '2.25rem',
};
