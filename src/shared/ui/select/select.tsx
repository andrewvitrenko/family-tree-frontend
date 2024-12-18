'use client';

import { MenuItem, TextField } from '@mui/material';
import { FC, memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { TSelectProps } from './model/props.model';

const Select: FC<TSelectProps> = ({
  defaultValue = '',
  name,
  options,
  helperText,
  onBlur,
  onChange,
  required,
  ...props
}) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    defaultValue,
    control,
    rules: { required, onBlur, onChange },
  });

  return (
    <TextField
      name={field.name}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      helperText={fieldState.error?.message ?? helperText}
      select
      required={required}
      inputRef={field.ref}
      error={!!fieldState.error}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default memo(Select);
