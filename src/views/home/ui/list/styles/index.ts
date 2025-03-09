import { SxProps, Theme } from '@mui/material';

export const pagination: SxProps<Theme> = (theme) => ({
  marginTop: 4,
  [theme.breakpoints.up('sm')]: {
    marginTop: 8,
  },
});
