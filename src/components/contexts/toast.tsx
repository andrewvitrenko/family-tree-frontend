'use client';

import { FC } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { Toast } from '@/components/ui';
import { useToastStore } from '@/store/toast';

export const ToastContext: FC = () => {
  const { toasts } = useToastStore(
    useShallow((state) => ({ toasts: state.toasts })),
  );

  return toasts.map((toast) => <Toast key={toast.id} {...toast} />);
};
