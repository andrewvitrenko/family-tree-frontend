import { AlertColor } from '@mui/material/Alert';

export type TToast = {
  open: boolean;
  description: string;
  severity: AlertColor;
};
