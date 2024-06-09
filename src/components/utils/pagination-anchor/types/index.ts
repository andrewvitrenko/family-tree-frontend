import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { InfiniteQueryObserverResult } from 'react-query';

import { TPaginatedData } from '@/types/api';

export type TPaginationAnchorProps = {
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<TPaginatedData<object>, unknown>
  >;
  isLoading?: boolean;
  hasNextPage?: boolean;
  noNextPageText?: string;
  sx?: SxProps<Theme>;
};
