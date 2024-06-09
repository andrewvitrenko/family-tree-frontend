import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const title: SxProps<Theme> = {
  fontSize: '1.25rem',
  fontWeight: 700,
};

export const input: SxProps<Theme> = {
  width: '18.75rem',
  marginTop: 2,
};

export const actions: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: 4,
};

export const button: SxProps<Theme> = {
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'none',
};
