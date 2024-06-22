export type TCreateTreeModalProps = {
  open: boolean;
  onSubmit: (values: TCreateTreeForm) => void;
  onCancel: () => void;
};

export type TCreateTreeForm = {
  name: string;
};
