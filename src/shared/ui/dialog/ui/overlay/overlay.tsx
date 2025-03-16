import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ElementRef, FC, forwardRef } from 'react';

import { cn } from '@/shared/lib/utils';

import { TDialogOverlayProps } from './model/props.model';

export const DialogOverlay: FC<TDialogOverlayProps> = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  TDialogOverlayProps
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
      {...props}
    />
  );
});

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
