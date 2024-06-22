import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
};

export const text: SxProps<Theme> = (theme) => ({
  textAlign: 'center',
  fontSize: '0.875rem',
  color: 'text.secondary',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
});
