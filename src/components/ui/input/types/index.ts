import { TextFieldProps } from '@mui/material/TextField';

export type TInputProps = TextFieldProps & {
  name: string;
  pattern?: RegExp;
};
