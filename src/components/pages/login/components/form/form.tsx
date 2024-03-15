'use client';

import { Box } from '@mui/material';
import { FC, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, Input, PasswordInput } from '@/components/ui';
import { PASSWORD_REGEX } from '@/constants/validation';
import { useToast } from '@/hooks/use-toast';

import { TLoginForm } from '../../types/form';
import * as styles from './styles';

const Form: FC = () => {
  const methods = useForm<TLoginForm>({ reValidateMode: 'onBlur' });
  const { formState, handleSubmit } = methods;

  const toast = useToast();

  const onSubmit = useCallback(
    async (values: TLoginForm) => {
      try {
        console.log(values);
        throw new Error('test');
      } catch (e) {
        toast.error('test error');
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

export default Form;
