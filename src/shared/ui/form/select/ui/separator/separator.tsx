import * as SelectPrimitive from '@radix-ui/react-select';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TSeparatorProps } from './model/props.model';

export const Separator: FC<TSeparatorProps> = memo(
  ({ className, ...props }) => {
    return (
      <SelectPrimitive.Separator
        className={cn('-mx-1 my-1 h-px bg-muted', className)}
        {...props}
      />
    );
  },
);

Separator.displayName = 'Separator';
