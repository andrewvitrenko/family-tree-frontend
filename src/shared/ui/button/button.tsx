import { Slot } from '@radix-ui/react-slot';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { buttonVariants } from './config/styles.config';
import { TButtonProps } from './model/props.model';

export const Button: FC<TButtonProps> = memo(
  ({ className, variant, size, asChild = false, ...props }) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
