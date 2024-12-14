import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
};

export const trigger: SxProps<Theme> = {
  transform: 'scale(0)',
  backgroundColor: 'primary.light',
  color: 'common.white',
  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    backgroundColor: 'primary.main',
  },
};
