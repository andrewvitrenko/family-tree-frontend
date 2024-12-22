'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TLabelProps } from './model/props.model';

export const Label: FC<TLabelProps> = memo(
  ({ className, required, ...props }) => (
    <LabelPrimitive.Root
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        { ['after:content-star after:ml-1']: required },
        className,
      )}
      {...props}
    />
  ),
);

Label.displayName = LabelPrimitive.Root.displayName;
