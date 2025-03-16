import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TDialogFooterProps } from './model/props.model';

export const DialogFooter: FC<TDialogFooterProps> = memo(
  ({ className, ...props }) => {
    return (
      <div
        className={cn(
          'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
          className,
        )}
        {...props}
      />
    );
  },
);

DialogFooter.displayName = 'DialogFooter';
