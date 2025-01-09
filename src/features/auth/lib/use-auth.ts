'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'sonner';
import { useShallow } from 'zustand/react/shallow';

import { useUserStore } from '@/entities/user';
import { ERoute } from '@/shared/model/navigation.model';

import { AuthApi } from '../api';
import { TSignUpPayload } from '../model/payload.model';

export type TUseAuth = {
  isRegistering: boolean;
  isLoggingOut: boolean;
  signup: (payload: TSignUpPayload) => void;
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

  const { mutate: signup, isPending: isRegistering } = useMutation({
    mutationKey: ['auth.signup'],
    mutationFn: (payload: TSignUpPayload) => AuthApi.register(payload),
    onError: (error) => toast.error(error.message),
    onSuccess: () => {
      toast.success('Welcome to our App!');
      router.push(ERoute.HOME);
    },
  });

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
    isRegistering,
    isLoggingOut,
    signup,
    logout,
  };
};
