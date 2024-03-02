import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const card: SxProps<Theme> = {
  minWidth: '24rem',
};

export const title: SxProps<Theme> = {
  marginBottom: '1.5rem',
  textAlign: 'center',
  fontSize: '2rem',
  lineHeight: 1.5,
  fontWeight: '700',
};
