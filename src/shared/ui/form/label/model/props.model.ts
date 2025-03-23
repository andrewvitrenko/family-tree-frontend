import { LabelProps } from '@radix-ui/react-label';

export type TLabelProps = Omit<LabelProps, 'children'> & {
  required?: boolean;
  text: string;
  name: string;
};
