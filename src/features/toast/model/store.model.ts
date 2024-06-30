import { AlertColor } from '@mui/material/Alert';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

import { TToast } from './toast.model';

type TToastStore = {
  toasts: TToast[];
  open: (description: string, severity: AlertColor) => void;
  close: (id: string) => void;
};

export const useToastStore = create<TToastStore>((set) => ({
  toasts: [],
  open: (description: string, severity: AlertColor) =>
    set((state) => {
      const toast: TToast = { description, severity, open: true, id: uuidv4() };
      const toasts = [toast, ...state.toasts].slice(0, 5);

      return { toasts };
    }),
  close: (id: string) =>
    set((state) => {
      const toasts = state.toasts.filter((toast) => toast.id !== id);

      return { toasts };
    }),
}));
