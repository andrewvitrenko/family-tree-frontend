import { AlertColor } from '@mui/material/Alert';

export type TToast = {
  id: string;
  open: boolean;
  description: string;
  severity: AlertColor;
};
