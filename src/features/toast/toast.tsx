import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { FC, memo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useToastStore } from './store';
import * as styles from './styles';

const Toast: FC = () => {
  const { toasts, close } = useToastStore(
    useShallow((state) => ({ toasts: state.toasts, close: state.close })),
  );

  return toasts.map(({ description, id, open, severity }) => (
    <Snackbar
      onClose={() => close(id)}
      open={open}
      autoHideDuration={3000}
      key={id}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    >
      <Alert
        onClose={() => close(id)}
        severity={severity}
        variant="filled"
        sx={styles.alert}
      >
        {description}
      </Alert>
    </Snackbar>
  ));
};

export default memo(Toast);
