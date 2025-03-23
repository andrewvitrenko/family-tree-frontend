import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TCardHeaderProps } from './model/props.model';

export const CardHeader: FC<TCardHeaderProps> = memo(
  ({ className, ...props }) => {
    return (
      <div
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
      />
    );
  },
);

CardHeader.displayName = 'CardHeader';
