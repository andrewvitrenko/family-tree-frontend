import { TextFieldProps } from '@mui/material/TextField';
import { FieldValues, Validate } from 'react-hook-form';

export type TInputProps = Omit<TextFieldProps, 'select'> & {
  name: string;
  pattern?: RegExp;
  validate?: Validate<string, FieldValues>;
};
