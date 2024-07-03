import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import {
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';

import { TPaginatedData } from '@/shared/api/model';

export type TPaginationAnchorProps = {
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<InfiniteData<TPaginatedData<object>, unknown>>
  >;
  isLoading?: boolean;
  hasNextPage?: boolean;
  noNextPageText?: string;
  sx?: SxProps<Theme>;
};
