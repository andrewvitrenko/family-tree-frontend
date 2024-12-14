import { Theme } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { CircularProgressProps } from '@mui/material/CircularProgress';
import { SxProps } from '@mui/system';

type TSpinnerProps = CircularProgressProps & { sx?: SxProps<Theme> };

export type TButtonProps = MuiButtonProps & {
  loading?: boolean;
  spinnerProps?: TSpinnerProps;
};
