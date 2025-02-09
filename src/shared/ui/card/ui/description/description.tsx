import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TCardDescriptionProps } from './model/props.model';

export const CardDescription: FC<TCardDescriptionProps> = memo(
  ({ className, ...props }) => {
    return (
      <div
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
      />
    );
  },
);

CardDescription.displayName = 'CardDescription';
