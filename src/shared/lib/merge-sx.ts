import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

/*
 * Based on MUI example https://mui.com/system/getting-started/the-sx-prop/#passing-the-sx-prop
 * */
const mergeSx = (
  ...styles: Array<SxProps<Theme> | undefined>
): SxProps<Theme> => {
  return styles
    .filter(Boolean)
    .map((sx) => (Array.isArray(sx) ? sx : [sx]))
    .flat();
};

export default mergeSx;
