import { useMemo } from 'react';
import { FieldError, useFormState } from 'react-hook-form';

export const useFieldError = (name: string): string | undefined => {
  const { errors } = useFormState({ name });

  const error = errors[name] as FieldError | undefined;

  return useMemo(() => error?.message, [error]);
};
