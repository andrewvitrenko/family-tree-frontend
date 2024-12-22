import { TextFieldProps } from '@mui/material/TextField';

export type TSelectOption<K extends string = string> = {
  label: string;
  value: K;
};

export type TSelectProps = Omit<TextFieldProps, 'select'> & {
  name: string;
  options: TSelectOption[];
};
