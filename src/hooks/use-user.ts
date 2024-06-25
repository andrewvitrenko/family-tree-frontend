import { QueryObserverResult, useQuery } from 'react-query';
import { useShallow } from 'zustand/react/shallow';

import { User } from '@/api/user';
import { useToast } from '@/hooks/use-toast';
import { useUserStore } from '@/store/user';

import { useAuth } from './use-auth';

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
    queryFn: () => User.getMe(),
    onError: (err) => {
      toast.error((err as Error).message);
      logout();
    },
    onSuccess: (user) => setUser(user),
  });

  return { status };
};
