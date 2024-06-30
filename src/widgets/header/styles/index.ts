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

export const menuItem: SxProps<Theme> = {
  textTransform: 'uppercase',
  color: 'grey.500',
  display: 'flex',
  alignItems: 'center',
  gap: 1.5,

  '.MuiTypography-root': {
    fontSize: '0.875rem',
    fontWeight: 300,
  },
};
