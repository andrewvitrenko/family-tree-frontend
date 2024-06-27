import { Theme } from '@mui/material';
import { CircularProgressProps } from '@mui/material/CircularProgress';
import { SxProps } from '@mui/system';

export type TLoaderProps = CircularProgressProps & {
  sx?: SxProps<Theme>;
  size?: number;
};
