import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

const mergeSx = (
  ...styles: Array<SxProps<Theme> | undefined>
): SxProps<Theme> => {
  return styles
    .filter(Boolean)
    .map((sx) => (Array.isArray(sx) ? sx : [sx]))
    .flat();
};

export default mergeSx;
