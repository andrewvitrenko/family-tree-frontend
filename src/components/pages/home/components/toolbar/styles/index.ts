import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const wrapper: SxProps<Theme> = (theme) => ({
  minHeight: '3.5rem',
  [theme.breakpoints.up('sm')]: {
    minHeight: '4rem',
  },
});

export const container: SxProps<Theme> = (theme) => ({
  gap: 2,
  paddingX: 4,
  [theme.breakpoints.up('sm')]: {
    paddingX: 8,
  },
});

export const title: SxProps<Theme> = {
  fontSize: '1.5rem',
  marginRight: 'auto',
};

export const profile: SxProps<Theme> = {
  color: 'common.white',
};
