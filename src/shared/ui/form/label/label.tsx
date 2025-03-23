'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { FC, memo } from 'react';

import { useFieldError } from '@/shared/hooks';
import { cn } from '@/shared/lib/utils';

import { TLabelProps } from './model/props.model';

export const Label: FC<TLabelProps> = memo(
  ({ className, required, text, name, ...props }) => {
    const error = useFieldError(name);

    return (
      <LabelPrimitive.Root
        className={cn(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          {
            ['after:ml-1 after:content-star']: required,
            ['text-destructive']: !!error,
          },
          className,
        )}
        {...props}
      >
        {text}
      </LabelPrimitive.Root>
    );
  },
);

Label.displayName = LabelPrimitive.Root.displayName;
