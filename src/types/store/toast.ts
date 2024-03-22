import { AlertColor } from '@mui/material/Alert';

export type TToast = {
  id: string;
  open: boolean;
  description: string;
  severity: AlertColor;
};

export type TToastStore = {
  toasts: TToast[];
  open: (description: string, severity: AlertColor) => void;
  close: (id: string) => void;
};
