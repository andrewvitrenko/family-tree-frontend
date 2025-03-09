import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TAlertDialogHeaderHeaderProps } from './model/props.model';

export const AlertDialogHeader: FC<TAlertDialogHeaderHeaderProps> = memo(
  ({ className, ...props }) => {
    return (
      <div
        className={cn(
          'flex flex-col space-y-2 text-center sm:text-left',
          className,
        )}
        {...props}
      />
    );
  },
);

AlertDialogHeader.displayName = 'AlertDialogHeader';
