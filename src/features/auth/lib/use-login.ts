import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useToast } from '@/features/toast';
import { ERoute } from '@/shared/model/navigation.model';

import { AuthApi } from '../api';
import { TLoginPayload } from '../model/payload.model';

export type TUseLogin = UseMutationResult<void, Error, TLoginPayload>;

export const useLogin = (): TUseLogin => {
  const router = useRouter();
  const toast = useToast();

  return useMutation({
    mutationKey: ['auth.login'],
    mutationFn: (payload: TLoginPayload) => AuthApi.login(payload),
    onError: (error) => toast.error(error.message),
    onSuccess: () => router.push(ERoute.HOME),
  });
};
