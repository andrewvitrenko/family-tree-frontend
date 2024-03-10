import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
  padding: 2,
  boxSizing: 'border-box',
};

export const card: SxProps<Theme> = {
  width: '24rem',
  maxWidth: '100%',
};

export const title: SxProps<Theme> = {
  textAlign: 'center',
  fontSize: '2rem',
  lineHeight: 1.5,
  fontWeight: 700,
  marginBottom: '1.5rem',
};

export const footer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 0.25,
};
