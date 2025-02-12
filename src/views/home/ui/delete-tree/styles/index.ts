import { SxProps, Theme } from '@mui/material';

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
