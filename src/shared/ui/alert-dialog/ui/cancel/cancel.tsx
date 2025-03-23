import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { ElementRef, FC, forwardRef } from 'react';

import { cn } from '@/shared/lib/utils';
import { buttonVariants } from '@/shared/ui/button';

import { TAlertDialogCancelProps } from './model/props.model';

export const AlertDialogCancel: FC<TAlertDialogCancelProps> = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Cancel>,
  TAlertDialogCancelProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: 'outline' }),
      'mt-2 sm:mt-0',
      className,
    )}
    {...props}
  />
));

AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
