import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from 'react-query';
import { useShallow } from 'zustand/react/shallow';

import { Auth } from '@/api/auth';
import { useToast } from '@/hooks/use-toast';
import { useUserStore } from '@/store/user';
import { TLoginPayload, TSignUpPayload } from '@/types/api/auth';
import { ERoute } from '@/types/routes';

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

  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationKey: ['auth.login'],
    mutationFn: (payload: TLoginPayload) => Auth.login(payload),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: () => router.push(ERoute.HOME),
  });

  const { mutate: signup, isLoading: isRegistering } = useMutation({
    mutationKey: ['auth.signup'],
    mutationFn: (payload: TSignUpPayload) => Auth.register(payload),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: () => {
      toast.success('Welcome to our App!');
      router.push(ERoute.HOME);
    },
  });

  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationKey: ['auth.logout'],
    mutationFn: () => Auth.logout(),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: async () => {
      cleanUser();
      await queryClient.invalidateQueries({
        refetchActive: false,
        refetchInactive: false,
      });
      router.push(ERoute.LOGIN);
    },
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
