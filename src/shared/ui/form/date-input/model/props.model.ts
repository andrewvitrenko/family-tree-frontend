export type TDateInputProps = {
  name: string;
  required?: boolean;
  shouldUnregister?: boolean;
  onChange?: (value: string) => void | Promise<void>;
  placeholder?: string;
  onBlur?: () => void | Promise<void>;
  minDate?: Date;
  maxDate?: Date;
};
