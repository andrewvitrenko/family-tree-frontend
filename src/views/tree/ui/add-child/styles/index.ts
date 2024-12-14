import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  bottom: 0,
};

export const trigger: SxProps<Theme> = {
  backgroundColor: 'primary.light',
  color: 'common.white',
  transform: 'scale(0)',
  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    backgroundColor: 'primary.main',
  },
};
