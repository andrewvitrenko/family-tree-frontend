'use client';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { FC, memo } from 'react';
import { useController } from 'react-hook-form';

import { mergeSx } from '@/shared/lib';

import { TDateInputProps } from './model/props.model';
import * as styles from './styles';

const DateInput: FC<TDateInputProps> = ({
  name,
  defaultValue = null,
  onChange,
  required,
  sx,
  shouldUnregister,
  helperText,
  ...props
}) => {
  const { field, fieldState } = useController({
    name,
    defaultValue,
    shouldUnregister,
    rules: { onChange, required },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={field.value}
        format="dd/MM/yyyy"
        inputRef={field.ref}
        onChange={field.onChange}
        sx={mergeSx(fieldState.error && styles.error, sx)}
        slotProps={{
          textField: {
            error: !!fieldState.error,
            helperText: fieldState.error?.message ?? helperText,
          },
        }}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default memo(DateInput);
