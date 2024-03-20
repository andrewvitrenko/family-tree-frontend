'use client';

import { Box } from '@mui/material';
import { FC, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { AuthApi } from '@/api/auth';
import { Button, Input, PasswordInput, Select } from '@/components/ui';
import { PASSWORD_REGEX } from '@/constants/validation';
import { useToast } from '@/hooks/use-toast';
import { ELocalStorageKey } from '@/types/local-storage';
import { ESex } from '@/types/user';

import { TSignUpForm } from '../../types/form';
import { sexes } from './constants';
import * as styles from './styles';

const defaultValues: TSignUpForm = {
  email: 'test@gmail.com',
  firstName: 'Andrii',
  lastName: 'Vitrenko',
  sex: ESex.MALE,
  password: 'M81dy140',
  confirmPassword: 'M81dy140',
  birthDate: '',
};

const Form: FC = () => {
  const toast = useToast();

  const methods = useForm<TSignUpForm>({
    reValidateMode: 'onBlur',
    defaultValues,
  });
  const { handleSubmit, formState } = methods;

  const onSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ({ confirmPassword, ...registerValues }: TSignUpForm) => {
      try {
        const { access_token } = await AuthApi.register(registerValues);
        localStorage.setItem(ELocalStorageKey.ACCESS_TOKEN, access_token);
      } catch (e) {
        toast.error((e as Error).message);
      }
    },
    [toast],
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
