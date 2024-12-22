import { HTMLProps, ReactNode } from 'react';

export type TInputProps = HTMLProps<HTMLInputElement> & {
  name: string;
  label: string;
  shouldUnregister?: boolean;
  endAdornment?: ReactNode;
};
