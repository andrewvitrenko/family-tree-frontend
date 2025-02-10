import { SxProps, Theme } from '@mui/material';
import { CircularProgressProps } from '@mui/material/CircularProgress';

export type TLoaderProps = CircularProgressProps & {
  sx?: SxProps<Theme>;
  size?: number;
};
