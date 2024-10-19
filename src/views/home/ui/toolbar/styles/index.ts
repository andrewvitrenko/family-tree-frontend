import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  gap: 4,
  paddingBottom: 3,
  borderBottom: '1px solid',
  borderColor: 'grey.300',
};

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
