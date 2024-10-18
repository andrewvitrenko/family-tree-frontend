import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const trigger: SxProps<Theme> = {
  width: '2rem',
  height: '2rem',
  borderRadius: '99rem',
  padding: 0,
  minWidth: 'unset',
  backgroundColor: 'error.light',
  transform: 'scale(0)',
  transitionProperty: 'transform, background-color',
  transition: '0.3s ease-in-out',

  '&:hover': {
    backgroundColor: 'error.main',
  },
};

export const actions: SxProps<Theme> = {
  marginTop: 4,
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 2,
  alignItems: 'center',
};

export const heading: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: '1.25rem',
};

export const actionButton: SxProps<Theme> = {
  textTransform: 'none',
  fontSize: '0.75rem',
  fontWeight: 600,
};
