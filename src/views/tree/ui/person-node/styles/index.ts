import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  padding: '1rem',
  borderRadius: '1rem',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  '&:hover .MuiIconButton-root': {
    transform: 'scale(1)',
  },

  '&:hover .MuiCard-root': {
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
};
