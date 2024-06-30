import { TCreateTreeForm } from './form.model';

export type TCreateTreeModalProps = {
  open: boolean;
  onSubmit: (values: TCreateTreeForm) => void;
  onCancel: () => void;
};
