'use client';

import { FC, memo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useUserStore } from '@/entities/user';
import { PaginationAnchor } from '@/features/pagination';
import { Loader } from '@/shared/ui';

import { TreeCard } from '..';
import { TListProps } from './models/props.model';

export const List: FC<TListProps> = memo(
  ({ trees, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage }) => {
    const { user } = useUserStore(
      useShallow((state) => ({ user: state.user })),
    );

    if (isFetching) {
      return <Loader className="mt-4" />;
    }

    if (!trees?.length) {
      return <p className="mt-5 text-center">No trees currently available</p>;
    }

    return (
      <div className="mt-5 md:mt-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trees.map((tree) => (
            <TreeCard
              key={tree.id}
              tree={tree}
              editable={tree.ownerId === user?.id}
            />
          ))}
        </div>
        <PaginationAnchor
          className="mt-4 md:mt-8"
          hasNextPage={hasNextPage}
          isLoading={isFetchingNextPage}
          noNextPageText="No more trees for now"
          fetchNextPage={fetchNextPage}
        />
      </div>
    );
  },
);

List.displayName = 'List';
