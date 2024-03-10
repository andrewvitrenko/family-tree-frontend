import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 4,
  boxSizing: 'border-box',
};

export const card: SxProps<Theme> = {
  width: '24rem',
  maxWidth: '100%',
};

export const title: SxProps<Theme> = {
  marginBottom: '1.5rem',
  textAlign: 'center',
  fontSize: '2rem',
  lineHeight: 1.5,
  fontWeight: '700',
};

export const footer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 0.5,
};
