import { QueryObserverResult, useQuery } from 'react-query';
import { useShallow } from 'zustand/react/shallow';

import { useAuth } from '@/features/auth';
import { useToast } from '@/features/toast';

import { UserApi } from '../api';
import { useUserStore } from '../model';

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
