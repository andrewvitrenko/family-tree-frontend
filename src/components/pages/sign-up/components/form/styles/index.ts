import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};

export const button: SxProps<Theme> = {
  marginTop: 10,
};

export const names: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 4,
};
