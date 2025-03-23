import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TCardProps } from './model/props.model';

export const Card: FC<TCardProps> = memo(({ className, ...props }) => {
  return (
    <div
      className={cn(
        'rounded-xl border bg-card text-card-foreground shadow',
        className,
      )}
      {...props}
    />
  );
});

Card.displayName = 'Card';
