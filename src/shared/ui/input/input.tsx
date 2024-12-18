'use client';

import { TextField } from '@mui/material';
import { FC, memo } from 'react';
import { useController } from 'react-hook-form';

import { TInputProps } from './model/props.model';

const Input: FC<TInputProps> = ({
  name,
  required = false,
  pattern,
  helperText,
  defaultValue = '',
  onBlur,
  onChange,
  validate,
  shouldUnregister,
  ...props
}) => {
  const { field, fieldState } = useController({
    name,
    defaultValue,
    shouldUnregister,
    rules: {
      required: { value: required, message: 'This field is required' },
      pattern: pattern && { value: pattern, message: 'Invalid format' },
      onBlur,
      onChange,
      validate,
    },
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
      {...props}
    />
  );
};

export default memo(Input);
