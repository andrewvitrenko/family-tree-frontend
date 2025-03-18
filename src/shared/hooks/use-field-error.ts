import { useMemo } from 'react';
import { useFormState } from 'react-hook-form';

export const useFieldError = (name: string): string | null => {
  const { errors } = useFormState({ name, exact: true });

  return useMemo(() => {
    const error = errors[name];

    if (!error?.message) return null;

    return error.message as string;
  }, [errors[name], name]);
};
