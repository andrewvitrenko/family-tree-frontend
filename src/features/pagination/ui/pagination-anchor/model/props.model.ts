import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export type TPaginationAnchorProps = {
  fetchNextPage: () => Promise<unknown>;
  isLoading?: boolean;
  hasNextPage?: boolean;
  noNextPageText?: string;
  sx?: SxProps<Theme>;
};
