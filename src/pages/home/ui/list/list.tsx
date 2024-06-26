import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useTrees } from '@/entities/trees';
import { useUserStore } from '@/entities/user';
import { PaginationAnchor } from '@/features/pagination';
import { Loader } from '@/shared/ui';

import { TreeCard } from '..';
import * as styles from './styles';

const List: FC = () => {
  const { trees, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useTrees();

  const { user } = useUserStore(useShallow((state) => ({ user: state.user })));

  if (isFetching) {
    return <Loader sx={styles.loader} />;
  }

  if (!trees?.length) {
    return (
      <Typography sx={styles.emptyText}>
        No trees currently available
      </Typography>
    );
  }

  return (
    <Box sx={styles.container}>
      <Grid container spacing={4}>
        {trees.map((tree) => (
          <Grid key={tree.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TreeCard {...tree} editable={tree.ownerId === user?.id} />
          </Grid>
        ))}
      </Grid>
      <PaginationAnchor
        sx={styles.pagination}
        hasNextPage={hasNextPage}
        isLoading={isFetchingNextPage}
        noNextPageText="No more trees for now"
        fetchNextPage={fetchNextPage}
      />
    </Box>
  );
};

export default memo(List);
