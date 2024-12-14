import { TCreateNodeForm } from './form.model';

export type TCreateNodeProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TCreateNodeForm) => void;
  minDate?: Date;
  maxDate?: Date;
};
