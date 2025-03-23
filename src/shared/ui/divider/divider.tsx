import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { dividerVariants } from './config/styles.config';
import { TDividerProps } from './model/props.model';

export const Divider: FC<TDividerProps> = memo(
  ({ className, orientation, ...props }) => {
    return (
      <div
        className={cn(dividerVariants({ orientation, className }))}
        {...props}
      />
    );
  },
);

Divider.displayName = 'Divider';
