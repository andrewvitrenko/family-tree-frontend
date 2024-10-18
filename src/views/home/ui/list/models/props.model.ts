import { TTree } from '@/entities/trees';

export type TListProps = {
  trees?: TTree[];
  isFetching: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => Promise<unknown>;
};
