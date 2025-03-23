'use client';

import { FC, memo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/shared/lib/utils';
import { Loader } from '@/shared/ui';

import { TPaginationAnchorProps } from './model/props.model';

export const PaginationAnchor: FC<TPaginationAnchorProps> = memo(
  ({ noNextPageText, fetchNextPage, className, hasNextPage, isLoading }) => {
    const { ref, inView } = useInView({ threshold: 1 });

    useEffect(() => {
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    }, [inView, hasNextPage, fetchNextPage]);

    return (
      <div className={cn('flex justify-center', className)} ref={ref}>
        {isLoading && <Loader />}
        {!hasNextPage && noNextPageText && (
          <p className="text-center text-muted-foreground max-md:text-sm">
            {noNextPageText}
          </p>
        )}
      </div>
    );
  },
);

PaginationAnchor.displayName = 'PaginationAnchor';
