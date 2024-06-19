import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { QueryObserverResult, useQuery, useQueryClient } from 'react-query';
import { useShallow } from 'zustand/react/shallow';

import { User } from '@/api/user';
import { useToast } from '@/hooks/use-toast';
import { LocalStorage } from '@/services';
import { useUserStore } from '@/store/user';
import { ELocalStorageKey } from '@/types/local-storage';
import { ERoute } from '@/types/routes';

export type TUseUser = {
  status: QueryObserverResult['status'];
  logout: () => Promise<void>;
};

export const useUser = (): TUseUser => {
  const toast = useToast();
  const router = useRouter();

  const queryClient = useQueryClient();

  const { setUser } = useUserStore(
    useShallow((state) => ({ setUser: state.setUser })),
  );

  const logout = useCallback(async () => {
    router.push(ERoute.LOGIN);
    LocalStorage.remove(ELocalStorageKey.ACCESS_TOKEN);
    await queryClient.invalidateQueries({
      refetchInactive: false,
      refetchActive: false,
    });
  }, [queryClient, router]);

  const { status } = useQuery({
    queryKey: ['user.me'],
    queryFn: () => User.getMe(),
    onError: async (err) => {
      toast.error((err as Error).message);
      await logout();
    },
    onSuccess: (user) => setUser(user),
  });

  return { status, logout };
};
