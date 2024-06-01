'use client';

import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FC, memo, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Auth } from '@/api/auth';
import { Button, Input, PasswordInput } from '@/components/ui';
import { PASSWORD_REGEX } from '@/constants/validation';
import { useToast } from '@/hooks/use-toast';
import { LocalStorage } from '@/services';
import { ELocalStorageKey } from '@/types/local-storage';
import { ERoute } from '@/types/routes';

import { TLoginForm } from '../../types/form';
import * as styles from './styles';

const Form: FC = () => {
  const toast = useToast();
  const router = useRouter();

  const methods = useForm<TLoginForm>({ reValidateMode: 'onBlur' });
  const { formState, handleSubmit } = methods;

  const onSubmit = useCallback(
    async (values: TLoginForm) => {
      try {
        const { access_token } = await Auth.login(values);
        LocalStorage.set(ELocalStorageKey.ACCESS_TOKEN, access_token);
        router.push(ERoute.HOME);
      } catch (e) {
        toast.error((e as Error).message);
      }
    },
    [toast, router],
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
            loading={formState.isSubmitting}
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
