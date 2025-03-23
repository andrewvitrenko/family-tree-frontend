import { Slot } from '@radix-ui/react-slot';
import { FC, forwardRef } from 'react';

import { cn } from '@/shared/lib/utils';

import { buttonVariants } from './config/styles.config';
import { TButtonProps } from './model/props.model';

export const Button: FC<TButtonProps> = forwardRef<
  HTMLButtonElement,
  TButtonProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});

Button.displayName = 'Button';
