import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ElementRef, FC, forwardRef } from 'react';

import { cn } from '@/shared/lib/utils';

import { TDialogTitleProps } from './model/props.model';

export const DialogTitle: FC<TDialogTitleProps> = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  TDialogTitleProps
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      )}
      {...props}
    />
  );
});

DialogTitle.displayName = DialogPrimitive.Title.displayName;
