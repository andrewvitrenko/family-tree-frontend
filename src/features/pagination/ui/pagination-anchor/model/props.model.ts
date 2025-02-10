import { SxProps, Theme } from '@mui/material';

export type TPaginationAnchorProps = {
  fetchNextPage: () => Promise<unknown>;
  isLoading?: boolean;
  hasNextPage?: boolean;
  noNextPageText?: string;
  sx?: SxProps<Theme>;
};
