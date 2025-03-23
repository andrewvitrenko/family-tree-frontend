import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TCardFooterProps } from './model/props.model';

export const CardFooter: FC<TCardFooterProps> = memo(
  ({ className, ...props }) => {
    return (
      <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
    );
  },
);

CardFooter.displayName = 'CardFooter';
