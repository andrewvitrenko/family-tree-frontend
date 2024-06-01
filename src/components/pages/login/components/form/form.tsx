'use client';

import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FC, memo, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { Auth } from '@/api/auth';
import { Button, Input, PasswordInput } from '@/components/ui';
import { PASSWORD_REGEX } from '@/constants/validation';
import { useToast } from '@/hooks/use-toast';
import { LocalStorage } from '@/services';
import { TLoginPayload } from '@/types/api/auth';
import { ELocalStorageKey } from '@/types/local-storage';
import { ERoute } from '@/types/routes';

import { TLoginForm } from '../../types/form';
import * as styles from './styles';

const Form: FC = () => {
  const toast = useToast();
  const router = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationKey: ['login'],
    mutationFn: (payload: TLoginPayload) => Auth.login(payload),
    onError: (err) => toast.error((err as Error).message),
    onSuccess: ({ access_token }) => {
      LocalStorage.set(ELocalStorageKey.ACCESS_TOKEN, access_token);
      router.push(ERoute.HOME);
    },
  });

  const methods = useForm<TLoginForm>({ reValidateMode: 'onBlur' });
  const { formState, handleSubmit } = methods;

  const onSubmit = useCallback(
    (values: TLoginForm) => mutate(values),
    [mutate],
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={styles.container}>
          <Input
            label="Email"
            placeholder="Please, enter your email"
            name="email"
            required
            type="email"
          />
          <PasswordInput
            label="Password"
            placeholder="Please, enter password"
            name="password"
            required
            pattern={PASSWORD_REGEX}
          />
          <Button
            disabled={!formState.isValid}
            type="submit"
            loading={isLoading}
            sx={styles.button}
          >
            Login
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default memo(Form);
