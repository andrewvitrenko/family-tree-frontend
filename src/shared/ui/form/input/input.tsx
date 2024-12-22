'use client';

import { FC, memo } from 'react';
import { FieldError, useFormContext, useFormState } from 'react-hook-form';

import { cn } from '@/shared/lib/utils';

import { Label } from '../label/label';
import { TInputProps } from './model/props.model';

export const Input: FC<TInputProps> = memo(
  ({
    name,
    className,
    label,
    onBlur,
    onChange,
    shouldUnregister,
    required,
    disabled,
    endAdornment,
    ...props
  }) => {
    const { register } = useFormContext();
    const { errors, isSubmitting } = useFormState({ name });

    const error = errors[name] as FieldError | undefined;

    return (
      <div className="space-y-2">
        <Label
          htmlFor={name}
          required={required}
          className={cn({ ['text-destructive']: !!error })}
        >
          {label}
        </Label>
        <div className="flex gap-2">
          <input
            id={name}
            className={cn(
              'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
              className,
            )}
            {...register(name, { shouldUnregister, onChange, onBlur })}
            {...props}
            disabled={disabled || isSubmitting}
            aria-required={required}
          />
          {endAdornment}
        </div>
        {!!error && (
          <p className="text-xs font-medium text-destructive">
            {error.message}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
