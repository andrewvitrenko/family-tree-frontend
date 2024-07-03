import { AlertColor } from '@mui/material/Alert';
import { create } from 'zustand';

import { TToast } from './toast.model';

type TToastStore = {
  toast: TToast;
  open: (description: string, severity: AlertColor) => void;
  close: () => void;
};

export const useToastStore = create<TToastStore>((set) => ({
  toast: { open: false, description: '', severity: 'info' },
  open: (description: string, severity: AlertColor) =>
    set({ toast: { open: true, description, severity } }),
  // open: openToast(set),
  close: () =>
    set({ toast: { open: false, description: '', severity: 'info' } }),
}));
