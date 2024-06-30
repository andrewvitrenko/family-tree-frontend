import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { CircularProgressProps } from '@mui/material/CircularProgress';

export type TButtonProps = MuiButtonProps & {
  loading?: boolean;
  spinnerProps?: CircularProgressProps;
};
