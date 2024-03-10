import TextField from '@mui/material/TextField';
import { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { mergeSx } from '@/utils';

import { TInputProps } from './types';

const Input: FC<TInputProps> = ({
  name,
  required,
  pattern,
  helperText,
  sx,
  ...props
}) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required, pattern },
  });

  return (
    <TextField
      name={field.name}
      onChange={field.onChange}
      onBlur={field.onBlur}
      inputRef={field.ref}
      error={!!fieldState.error}
      helperText={fieldState.error?.message ?? helperText}
      required={required}
      sx={mergeSx(sx)}
      {...props}
    />
  );
};

export default Input;
