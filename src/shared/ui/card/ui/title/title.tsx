import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TCardTitleProps } from './model/props.model';

export const CardTitle: FC<TCardTitleProps> = memo(
  ({ className, ...props }) => {
    return (
      <div
        className={cn('font-semibold leading-none tracking-tight', className)}
        {...props}
      />
    );
  },
);

CardTitle.displayName = 'CardTitle';
