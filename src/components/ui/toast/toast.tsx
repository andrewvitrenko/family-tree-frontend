import { Alert, Snackbar } from '@mui/material';
import { FC, memo, useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useToastStore } from '@/store/toast';
import { TToast } from '@/types/store/toast';

import * as styles from './styles';

const Toast: FC<TToast> = ({ description, open, id, severity }) => {
  const { close } = useToastStore(
    useShallow((state) => ({ close: state.close })),
  );

  const onClose = useCallback(() => close(id), [close, id]);

  return (
    <Snackbar
      onClose={onClose}
      open={open}
      autoHideDuration={3000}
      key={id}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    >
      <Alert
        onClose={onClose}
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
