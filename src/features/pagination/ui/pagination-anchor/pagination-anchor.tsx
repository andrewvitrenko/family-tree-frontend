import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC, memo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { mergeSx } from '@/shared/lib';
import { Loader } from '@/shared/ui';

import * as styles from './styles';
import { TPaginationAnchorProps } from './types';

const PaginationAnchor: FC<TPaginationAnchorProps> = ({
  noNextPageText,
  fetchNextPage,
  sx,
  hasNextPage,
  isLoading,
}) => {
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <Box sx={mergeSx(styles.container, sx)} ref={ref}>
      {isLoading && <Loader />}
      {!hasNextPage && noNextPageText && (
        <Typography sx={styles.text}>{noNextPageText}</Typography>
      )}
    </Box>
  );
};

export default memo(PaginationAnchor);
