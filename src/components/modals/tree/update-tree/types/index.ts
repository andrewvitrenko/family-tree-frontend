export type TUpdateTreeForm = {
  name: string;
};

export type TUpdateTreeModalProps = {
  open: boolean;
  onSubmit: (values: TUpdateTreeForm) => void;
  onCancel: () => void;
  name?: string;
};
