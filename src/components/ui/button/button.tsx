import MuiButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { FC } from 'react';

import { mergeSx } from '@/utils';

import * as styles from './styles';
import { TButtonProps } from './types';

const Button: FC<TButtonProps> = ({
  loading,
  disabled,
  spinnerProps,
  sx,
  children,
  ...props
}) => {
  return (
    <MuiButton
      disabled={loading || disabled}
      variant="contained"
      sx={mergeSx(styles.button, sx)}
      {...props}
    >
      {children}
      {loading && (
        <CircularProgress
          size={24}
          {...spinnerProps}
          sx={mergeSx(styles.progress, spinnerProps?.sx)}
        />
      )}
    </MuiButton>
  );
};

export default Button;
