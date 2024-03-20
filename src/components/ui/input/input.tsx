'use client';

import { TextField } from '@mui/material';
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
  defaultValue,
  onBlur,
  onChange,
  ...props
}) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules: { required, pattern, onBlur, onChange },
  });

  return (
    <TextField
      name={field.name}
      value={field.value}
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
