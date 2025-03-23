import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TScrollDownButtonProps } from './model/props.model';

export const ScrollDownButton: FC<TScrollDownButtonProps> = memo(
  ({ className, ...props }) => {
    return (
      <SelectPrimitive.ScrollDownButton
        className={cn(
          'flex cursor-default items-center justify-center py-1',
          className,
        )}
        {...props}
      >
        <ChevronDown className="h-4 w-4" />
      </SelectPrimitive.ScrollDownButton>
    );
  },
);

ScrollDownButton.displayName = 'ScrollDownButton';
