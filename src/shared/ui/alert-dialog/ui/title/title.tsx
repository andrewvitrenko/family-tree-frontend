import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { ElementRef, FC, forwardRef } from 'react';

import { cn } from '@/shared/lib/utils';

import { TAlertDialogTitleProps } from './model/props.model';

export const AlertDialogTitle: FC<TAlertDialogTitleProps> = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Title>,
  TAlertDialogTitleProps
>(({ className, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  );
});

AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
