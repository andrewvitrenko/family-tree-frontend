import { QueryObserverResult, useQuery } from 'react-query';
import { useShallow } from 'zustand/react/shallow';

import { useToast } from '@/features/toast';
import { useUserStore } from '@/store/user';

import { useAuth } from '../auth';
import { UserApi } from './api';

export type TUseUser = {
  status: QueryObserverResult['status'];
};

export const useUser = (): TUseUser => {
  const toast = useToast();

  const { logout } = useAuth();

  const { setUser } = useUserStore(
    useShallow((state) => ({ setUser: state.setUser })),
  );

  const { status } = useQuery({
    queryKey: ['user.me'],
    queryFn: () => UserApi.getMe(),
    onError: (err) => {
      toast.error((err as Error).message);
      logout();
    },
    onSuccess: (user) => setUser(user),
  });

  return { status };
};
