export type TSelectOption<T extends string = string> = {
  label: string;
  value: T;
};

export type TSelectProps = {
  name: string;
  options: TSelectOption[];
  placeholder?: string;
  required?: boolean;
  shouldUnregister?: boolean;
  onChange?: (value: string) => void | Promise<void>;
  onBlur?: () => void | Promise<void>;
};
