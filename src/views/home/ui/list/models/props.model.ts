import { TUseTrees } from '@/entities/trees';

export type TListProps = Pick<
  TUseTrees,
  | 'trees'
  | 'isFetching'
  | 'isFetchingNextPage'
  | 'hasNextPage'
  | 'fetchNextPage'
>;
