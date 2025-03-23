export type TPaginationAnchorProps = {
  fetchNextPage: () => Promise<unknown>;
  isLoading?: boolean;
  hasNextPage?: boolean;
  noNextPageText?: string;
  className?: string;
};
