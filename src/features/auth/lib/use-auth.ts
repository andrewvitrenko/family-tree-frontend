'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useUserStore } from '@/entities/user';
import { useToast } from '@/features/toast';
import { ERoute } from '@/shared/model/navigation.model';

import { AuthApi } from '../api';
import { TLoginPayload, TSignUpPayload } from '../model/payload.model';

export type TUseAuth = {
  isLoggingIn: boolean;
  isRegistering: boolean;
  isLoggingOut: boolean;
  login: (payload: TLoginPayload) => void;
  signup: (payload: TSignUpPayload) => void;
  logout: () => void;
};

export const useAuth = (): TUseAuth => {
  const toast = useToast();
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

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationKey: ['auth.login'],
    mutationFn: (payload: TLoginPayload) => AuthApi.login(payload),
    onError: (error) => toast.error(error.message),
    onSuccess: () => router.push(ERoute.HOME),
  });

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
    isLoggingIn,
    isRegistering,
    isLoggingOut,
    login,
    signup,
    logout,
  };
};
