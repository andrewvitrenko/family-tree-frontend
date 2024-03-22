import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  padding: 4,
  boxSizing: 'border-box',
};

export const card: SxProps<Theme> = {
  width: '28rem',
  maxWidth: '100%',
  overflow: 'auto',
};

export const title: SxProps<Theme> = {
  textAlign: 'center',
  fontSize: '2rem',
  lineHeight: 1.5,
  fontWeight: 700,
  marginBottom: 6,
};

export const footer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 0.5,
};
