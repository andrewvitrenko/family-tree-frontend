import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TCardContentProps } from './model/props.model';

export const CardContent: FC<TCardContentProps> = memo(
  ({ className, ...props }) => {
    return <div className={cn('p-6 pt-0', className)} {...props} />;
  },
);

CardContent.displayName = 'CardContent';
