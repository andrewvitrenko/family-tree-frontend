import { HTMLProps, ReactNode } from 'react';

export type TInputBaseProps = HTMLProps<HTMLInputElement> & {
  name: string;
  endAdornment?: ReactNode;
  shouldUnregister?: boolean;
};
