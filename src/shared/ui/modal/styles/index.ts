import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 4,
};

export const content: SxProps<Theme> = {
  backgroundColor: 'common.white',
  padding: 4,
  borderRadius: 1.25,
  display: 'flex',
  flexDirection: 'column',
};
