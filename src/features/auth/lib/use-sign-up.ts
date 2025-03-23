import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { ERoute } from '@/shared/model/navigation.model';

import { AuthApi } from '../api';
import { TSignUpPayload } from '../model/payload.model';

export type TUseSignUp = UseMutationResult<void, Error, TSignUpPayload>;

export const useSignUp = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ['auth.signup'],
    mutationFn: (payload: TSignUpPayload) => AuthApi.register(payload),
    onError: (error) => toast.error(error.message),
    onSuccess: () => {
      toast.success('Welcome to our App!');
      router.push(ERoute.HOME);
    },
  });
};
