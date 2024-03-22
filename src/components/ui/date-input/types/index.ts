import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers';

export type TDateInputProps = MuiDatePickerProps<Date> & {
  name: string;
  format?: string;
  required?: boolean;
  onChange?: (value: string) => void;
};
