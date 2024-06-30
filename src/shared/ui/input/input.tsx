'use client';

import { TextField } from '@mui/material';
import { FC, memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { mergeSx } from '@/shared/lib';

import { TInputProps } from './model/props.model';

const Input: FC<TInputProps> = ({
  name,
  required = false,
  pattern,
  helperText,
  sx,
  defaultValue = '',
  onBlur,
  onChange,
  validate,
  shouldUnregister,
  ...props
}) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
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
      sx={mergeSx(sx)}
      {...props}
    />
  );
};

export default memo(Input);
