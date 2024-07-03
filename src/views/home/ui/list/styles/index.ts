import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const emptyText: SxProps<Theme> = {
  color: 'text.secondary',
  textAlign: 'center',
  marginTop: 5,
};

export const container: SxProps<Theme> = (theme) => ({
  marginTop: 5,
  [theme.breakpoints.up('sm')]: {
    marginTop: 8,
  },
});

export const pagination: SxProps<Theme> = (theme) => ({
  marginTop: 4,
  [theme.breakpoints.up('sm')]: {
    marginTop: 8,
  },
});

export const loader: SxProps<Theme> = {
  marginTop: 4,
};
