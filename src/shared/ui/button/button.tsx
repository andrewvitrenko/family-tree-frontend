import { Button as MuiButton, CircularProgress } from '@mui/material';
import { FC, memo } from 'react';

import { mergeSx } from '@/shared/lib';

import { TButtonProps } from './model/props.model';
import * as styles from './styles';

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

export default memo(Button);
