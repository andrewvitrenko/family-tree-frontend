import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TDialogHeaderProps } from './model/props.model';

export const DialogHeader: FC<TDialogHeaderProps> = memo(
  ({ className, ...props }) => {
    return (
      <div
        className={cn(
          'flex flex-col space-y-1.5 text-center sm:text-left',
          className,
        )}
        {...props}
      />
    );
  },
);

DialogHeader.displayName = 'DialogHeader';
