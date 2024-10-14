import { TConnectionForm } from '@/views/tree/model/connection-form.model';

export type TConnectionModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TConnectionForm) => void;
};
