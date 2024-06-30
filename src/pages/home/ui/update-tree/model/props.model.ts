import { TUpdateTreeForm } from './form.model';

export type TUpdateTreeModalProps = {
  open: boolean;
  onSubmit: (values: TUpdateTreeForm) => void;
  onCancel: () => void;
  name?: string;
};
