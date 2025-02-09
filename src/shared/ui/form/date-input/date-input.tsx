'use client';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { FC, memo } from 'react';
import { useController } from 'react-hook-form';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';

import { ErrorMessage } from '../error-message';
import { TDateInputProps } from './model/props.model';
import { Calendar } from './ui/calendar';

export const DateInput: FC<TDateInputProps> = memo(
  ({
    name,
    onChange,
    required,
    shouldUnregister,
    onBlur,
    placeholder,
    maxDate,
    minDate,
  }) => {
    const { field } = useController({
      name,
      shouldUnregister,
      rules: { onChange, onBlur, required },
    });

    return (
      <div className="space-y-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn('w-full justify-start text-left font-normal', {
                ['text-muted-foreground']: !field.value,
              })}
            >
              <CalendarIcon />
              {field.value ? (
                format(field.value, 'PPP')
              ) : (
                <span>{placeholder}</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              fromDate={minDate}
              toDate={maxDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <ErrorMessage name={name} />
      </div>
    );
  },
);

DateInput.displayName = 'DateInput';
