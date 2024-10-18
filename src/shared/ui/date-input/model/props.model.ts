import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers';

export type TDateInputProps = MuiDatePickerProps<Date> & {
  name: string;
  required?: boolean;
  onChange?: (value: string) => void;
};
