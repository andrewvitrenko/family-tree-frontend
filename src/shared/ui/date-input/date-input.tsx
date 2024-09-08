'use client';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { format as dateFnsFormat, formatISO, toDate } from 'date-fns';
import { FC, memo, useCallback } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { mergeSx } from '@/shared/lib';

import { TDateInputProps } from './model/props.model';
import * as styles from './styles';

const DateInput: FC<TDateInputProps> = ({
  name,
  format,
  defaultValue,
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

  const onDateChange = useCallback(
    (value: Date | null) => {
      if (!value) return;

      const date = format ? dateFnsFormat(value, format) : formatISO(value);

      setValue(name, date, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    },
    [format, name, setValue],
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={toDate(field.value)}
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
