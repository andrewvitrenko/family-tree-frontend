import * as SelectPrimitive from '@radix-ui/react-select';
import { FC } from 'react';

import { cn } from '@/shared/lib/utils';

import { ScrollDownButton } from '../scroll-down-button';
import { ScrollUpButton } from '../scroll-up-button';
import { TContentProps } from './model/props.model';

export const Content: FC<TContentProps> = ({
  className,
  children,
  position = 'popper',
  ...props
}) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          {
            ['data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1']:
              position === 'popper',
          },
          className,
        )}
        position={position}
        {...props}
      >
        <ScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn('p-1', {
            ['h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]']:
              position === 'popper',
          })}
        >
          {children}
        </SelectPrimitive.Viewport>
        <ScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};
