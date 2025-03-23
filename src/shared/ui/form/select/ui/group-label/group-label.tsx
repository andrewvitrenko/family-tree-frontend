import * as SelectPrimitive from '@radix-ui/react-select';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TGroupLabelProps } from './model/props.model';

export const GroupLabel: FC<TGroupLabelProps> = memo(
  ({ className, ...props }) => {
    return (
      <SelectPrimitive.Label
        className={cn('px-2 py-1.5 text-sm font-semibold', className)}
        {...props}
      />
    );
  },
);

GroupLabel.displayName = 'GroupLabel';
