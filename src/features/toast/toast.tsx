'use client';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { FC, memo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useToastStore } from './model/store.model';
import * as styles from './styles';

const Toast: FC = () => {
  const { toast, close } = useToastStore(
    useShallow((state) => ({ toast: state.toast, close: state.close })),
  );

  const { open, description, severity } = toast;

  return (
    <Snackbar
      onClose={close}
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    >
      <Alert
        onClose={close}
        severity={severity}
        variant="filled"
        sx={styles.alert}
      >
        {description}
      </Alert>
    </Snackbar>
  );
};

export default memo(Toast);
