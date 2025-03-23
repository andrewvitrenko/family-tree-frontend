import NextLink from 'next/link';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TLinkProps } from './model/props.model';

export const Link: FC<TLinkProps> = memo(({ className, ...props }) => {
  return (
    <NextLink
      className={cn(
        'inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-primary underline underline-offset-4 transition-all hover:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        className,
      )}
      {...props}
    />
  );
});

Link.displayName = 'Link';
