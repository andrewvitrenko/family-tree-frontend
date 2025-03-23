'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'sonner';
import { useShallow } from 'zustand/react/shallow';

import { useUserStore } from '@/entities/user';
import { ERoute } from '@/shared/model/navigation.model';

import { AuthApi } from '../api';

export type TUseAuth = {
  isLoggingOut: boolean;
  logout: () => void;
};

export const useAuth = (): TUseAuth => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { cleanUser } = useUserStore(
    useShallow((state) => ({ cleanUser: state.clearUser })),
  );

  const cleanUp = useCallback(async () => {
    cleanUser();
    await queryClient.invalidateQueries({
      refetchType: 'none',
    });
    router.push(ERoute.LOGIN);
  }, [cleanUser, queryClient, router]);

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationKey: ['auth.logout'],
    mutationFn: () => AuthApi.logout(),
    onError: async (error) => {
      toast.error(error.message);
      await cleanUp();
    },
    onSuccess: cleanUp,
  });

  return {
    isLoggingOut,
    logout,
  };
};
