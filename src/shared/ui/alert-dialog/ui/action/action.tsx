import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { ElementRef, FC, forwardRef } from 'react';

import { cn } from '@/shared/lib/utils';
import { buttonVariants } from '@/shared/ui/button';

import { TAlertDialogActionProps } from './model/props.model';

export const AlertDialogAction: FC<TAlertDialogActionProps> = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Action>,
  TAlertDialogActionProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
));

AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
