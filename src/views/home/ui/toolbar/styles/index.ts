import { SxProps, Theme } from '@mui/material';

export const input: SxProps<Theme> = {
  '.MuiInputBase-root': {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },

  '.MuiInputBase-input': {
    paddingTop: 3,
  },

  '.MuiSvgIcon-root': {
    fontSize: '1.25rem',
    marginRight: 1,
  },
};
