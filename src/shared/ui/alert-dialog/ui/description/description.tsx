import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { ElementRef, FC, forwardRef } from 'react';

import { cn } from '@/shared/lib/utils';

import { TAlertDialogDescriptionProps } from './model/props.model';

export const AlertDialogDescription: FC<TAlertDialogDescriptionProps> =
  forwardRef<
    ElementRef<typeof AlertDialogPrimitive.Description>,
    TAlertDialogDescriptionProps
  >(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  ));

AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;
