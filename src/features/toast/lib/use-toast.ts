import { AlertColor } from '@mui/material/Alert';
import { useCallback, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useToastStore } from '@/features/toast/model/store.model';

type TUseToast = {
  [key in AlertColor]: (description: string) => void;
};

export const useToast = (): TUseToast => {
  const open = useToastStore(useShallow((state) => state.open));

  const success = useCallback(
    (description: string) => open(description, 'success'),
    [open],
  );

  const info = useCallback(
    (description: string) => open(description, 'info'),
    [open],
  );

  const warning = useCallback(
    (description: string) => open(description, 'warning'),
    [open],
  );

  const error = useCallback(
    (description: string) => open(description, 'error'),
    [open],
  );

  return useMemo(
    () => ({ success, error, info, warning }),
    [error, info, success, warning],
  );
};
