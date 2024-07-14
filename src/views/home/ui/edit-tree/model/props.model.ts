import { TEditTreeForm } from './form.model';

export type TEditTreeModalProps = {
  open: boolean;
  onSubmit: (values: TEditTreeForm) => void;
  onCancel: () => void;
  name?: string;
};
