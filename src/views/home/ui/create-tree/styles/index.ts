import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const title: SxProps<Theme> = {
  fontSize: '1.25rem',
  fontWeight: 700,
};

export const input: SxProps<Theme> = {
  marginTop: 4,
  width: '18.75rem',
};

export const actions: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: 4,
};

export const action: SxProps<Theme> = {
  textTransform: 'none',
  fontSize: '0.75rem',
  fontWeight: 600,
};

export const trigger: SxProps<Theme> = {
  fontSize: '0.75rem',
  paddingBottom: 0,

  '.MuiButton-startIcon': {
    marginRight: 1,
  },
};
