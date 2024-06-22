import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const title: SxProps<Theme> = {
  fontSize: '1.25rem',
  fontWeight: 700,
};

export const actions: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: 4,
};

export const button: SxProps<Theme> = {
  textTransform: 'none',
  fontSize: '0.75rem',
  fontWeight: 600,
};
