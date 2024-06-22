import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

import { Auth } from '@/api/auth';
import { useToast } from '@/hooks/use-toast';
import { LocalStorage } from '@/services';
import { TLoginPayload, TSignUpPayload } from '@/types/api/auth';
import { ELocalStorageKey } from '@/types/local-storage';
import { ERoute } from '@/types/routes';

export type TUseAuth = {
  isLoggingIn: boolean;
  isRegistering: boolean;
  login: (payload: TLoginPayload) => void;
  signup: (payload: TSignUpPayload) => void;
};

export const useAuth = (): TUseAuth => {
  const toast = useToast();
  const router = useRouter();

  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationKey: ['auth.login'],
    mutationFn: (payload: TLoginPayload) => Auth.login(payload),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: ({ access_token }) => {
      LocalStorage.set(ELocalStorageKey.ACCESS_TOKEN, access_token);
      router.push(ERoute.HOME);
    },
  });

  const { mutate: signup, isLoading: isRegistering } = useMutation({
    mutationKey: ['auth.signup'],
    mutationFn: (payload: TSignUpPayload) => Auth.register(payload),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: ({ access_token }) => {
      toast.success('Welcome to our App!');
      LocalStorage.set(ELocalStorageKey.ACCESS_TOKEN, access_token);
      router.push(ERoute.HOME);
    },
  });

  return { isLoggingIn, isRegistering, login, signup };
};
