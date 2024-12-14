import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers';

export type TDateInputProps = MuiDatePickerProps<Date> & {
  name: string;
  required?: boolean;
  shouldUnregister?: boolean;
  onChange?: (value: string) => void;
  helperText?: string;
};
