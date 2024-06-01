'use client';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useShallow } from 'zustand/react/shallow';

import { User } from '@/api/user';
import { Modal } from '@/components/ui';
import { useUserStore } from '@/store/user';
import { ERoute } from '@/types/routes';

import Toolbar from './components/toolbar';

const Home: FC = () => {
  const { isFetching, isError, data } = useQuery({
    queryKey: ['me'],
    queryFn: () => User.getMe(),
  });

  const router = useRouter();
  const { setUser } = useUserStore(
    useShallow((state) => ({ setUser: state.setUser })),
  );

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  useEffect(() => {
    if (isError) {
      router.push(ERoute.LOGIN);
    }
  }, [isError, router]);

  if (isFetching) {
    return (
      <Modal open>
        <CircularProgress size={60} thickness={2} />
      </Modal>
    );
  }

  return (
    <Box>
      <Toolbar />
    </Box>
  );
};

export default Home;
