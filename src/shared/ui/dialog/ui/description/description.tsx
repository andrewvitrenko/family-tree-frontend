import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ElementRef, FC, forwardRef } from 'react';

import { cn } from '@/shared/lib/utils';

import { TDialogDescriptionProps } from './model/props.model';

export const DialogDescription: FC<TDialogDescriptionProps> = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  TDialogDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
});

DialogDescription.displayName = DialogPrimitive.Description.displayName;
