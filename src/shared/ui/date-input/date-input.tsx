'use client';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { formatISO } from 'date-fns';
import { FC, memo, useCallback } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { mergeSx } from '@/shared/lib';

import { TDateInputProps } from './model/props.model';
import * as styles from './styles';

const DateInput: FC<TDateInputProps> = ({
  name,
  defaultValue = null,
  onChange,
  required,
  disabled,
  sx,
  ...props
}) => {
  const { control, setValue } = useFormContext();
  const { field, fieldState } = useController({
    name,
    defaultValue,
    control,
    rules: { onChange, required },
  });

  console.log('useEffect', field.value);

  const onDateChange = useCallback(
    (date: Date | null) => {
      console.log('onChange', date);
      const value = date ? formatISO(date) : null;

      setValue(name, value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    },
    [name, setValue],
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={field.value}
        format="dd/MM/yyyy"
        inputRef={field.ref}
        onChange={onDateChange}
        disabled={disabled}
        sx={mergeSx(fieldState.error && styles.error, sx)}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default memo(DateInput);
