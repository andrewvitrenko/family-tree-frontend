import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { dividerVariants } from '../config/styles.config';

export type TDividerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dividerVariants>;
