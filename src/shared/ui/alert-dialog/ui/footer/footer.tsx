import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TAlertDialogFooterProps } from './model/props.model';

export const AlertDialogFooter: FC<TAlertDialogFooterProps> = memo(
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

AlertDialogFooter.displayName = 'AlertDialogFooter';
