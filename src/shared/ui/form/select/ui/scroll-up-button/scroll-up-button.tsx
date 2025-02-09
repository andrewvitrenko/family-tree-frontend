import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronUp } from 'lucide-react';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TScrollUpButtonProps } from './model/props.model';

export const ScrollUpButton: FC<TScrollUpButtonProps> = memo(
  ({ className, ...props }) => {
    return (
      <SelectPrimitive.ScrollUpButton
        className={cn(
          'flex cursor-default items-center justify-center py-1',
          className,
        )}
        {...props}
      >
        <ChevronUp className="h-4 w-4" />
      </SelectPrimitive.ScrollUpButton>
    );
  },
);

ScrollUpButton.displayName = 'ScrollUpButton';
