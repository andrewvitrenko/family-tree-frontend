import type { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

import { buttonVariants } from '../config/styles.config';

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
