import { TConnectionForm } from './form.model';

export type TConnectionModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TConnectionForm) => void;
};
