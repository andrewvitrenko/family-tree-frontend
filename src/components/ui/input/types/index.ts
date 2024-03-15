import { TextFieldProps } from '@mui/material/TextField';

export type TInputProps = Omit<TextFieldProps, 'select'> & {
  name: string;
  pattern?: RegExp;
};
