import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 8,
  boxSizing: 'border-box',
};

export const card: SxProps<Theme> = {
  width: 112,
  maxWidth: '100%',
};

export const title: SxProps<Theme> = {
  marginBottom: 6,
  textAlign: 'center',
  fontSize: '2rem',
  lineHeight: 1.5,
  fontWeight: '700',
};

export const footer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1,
};
