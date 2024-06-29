'use client';

import { Box } from '@mui/material';
import { FC, memo, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { PASSWORD_REGEX } from '@/constants/validation';
import { useAuth } from '@/shared/api';
import { Button, Input, PasswordInput } from '@/shared/ui';

import { TLoginForm } from '../../types/form';
import * as styles from './styles';

const Form: FC = () => {
  const { login, isLoggingIn } = useAuth();

  const methods = useForm<TLoginForm>({ reValidateMode: 'onBlur' });
  const { formState, handleSubmit } = methods;

  const onSubmit = useCallback((values: TLoginForm) => login(values), [login]);

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
            loading={isLoggingIn}
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
