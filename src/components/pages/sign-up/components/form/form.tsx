'use client';

import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { AuthApi } from '@/api/auth';
import {
  Button,
  DateInput,
  Input,
  PasswordInput,
  Select,
} from '@/components/ui';
import { PASSWORD_REGEX } from '@/constants/validation';
import { useToast } from '@/hooks/use-toast';
import { ELocalStorageKey } from '@/types/local-storage';
import { ERoute } from '@/types/routes';

import { TSignUpForm } from '../../types/form';
import { sexes } from './constants';
import * as styles from './styles';

const Form: FC = () => {
  const toast = useToast();
  const router = useRouter();

  const methods = useForm<TSignUpForm>({ reValidateMode: 'onBlur' });
  const { handleSubmit, formState } = methods;

  const onSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ({ confirmPassword, ...registerValues }: TSignUpForm) => {
      try {
        const { access_token } = await AuthApi.register(registerValues);
        localStorage.setItem(ELocalStorageKey.ACCESS_TOKEN, access_token);
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
            placeholder="Enter email"
            name="email"
            type="email"
            required
          />
          <Box sx={styles.names}>
            <Input type="text" label="First name" name="firstName" required />
            <Input type="text" name="lastName" label="Last name" required />
          </Box>
          <Select name="sex" label="Sex" required options={sexes} />
          <DateInput
            name="birthDate"
            label="Birth date"
            required
            maxDate={new Date()}
          />
          <PasswordInput
            pattern={PASSWORD_REGEX}
            name="password"
            required
            label="Password"
          />
          <PasswordInput
            name="confirmPassword"
            pattern={PASSWORD_REGEX}
            required
            label="Confirm password"
          />
          <Button
            type="submit"
            sx={styles.button}
            disabled={!formState.isValid}
            loading={formState.isSubmitting}
          >
            Sign up
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default Form;
