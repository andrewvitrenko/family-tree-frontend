import { MenuItem, TextField } from '@mui/material';
import { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { mergeSx } from '@/utils';

import { TSelectProps } from './types';

const Select: FC<TSelectProps> = ({
  defaultValue = '',
  name,
  options,
  helperText,
  sx,
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
      sx={mergeSx(sx)}
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

export default Select;
