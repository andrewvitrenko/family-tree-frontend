import { cva } from 'class-variance-authority';

export const dividerVariants = cva('bg-gray-400 shrink-0', {
  variants: {
    orientation: {
      vertical: 'h-full w-px',
      horizontal: 'h-px w-full',
    },
  },
  defaultVariants: { orientation: 'vertical' },
});
