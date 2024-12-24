import { FC, memo } from 'react';

import { useFieldError } from '@/shared/hooks';

import { TErrorMessageProps } from './model/props.model';

export const ErrorMessage: FC<TErrorMessageProps> = memo(({ name }) => {
  const error = useFieldError(name);

  if (!error) return null;

  return <p className="text-sm text-destructive">{error}</p>;
});

ErrorMessage.displayName = 'ErrorMessage';
