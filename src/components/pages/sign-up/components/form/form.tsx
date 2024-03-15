'use client';

import { Box } from '@mui/material';
import { FC, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, Input, PasswordInput, Select } from '@/components/ui';
import { PASSWORD_REGEX } from '@/constants/validation';

import { TSignUpForm } from '../../types/form';
import { sexes } from './constants';
import * as styles from './styles';

const Form: FC = () => {
  const methods = useForm<TSignUpForm>({ reValidateMode: 'onBlur' });
  const { handleSubmit, formState } = methods;

  const onSubmit = useCallback((values: TSignUpForm) => {
    console.log(values);
  }, []);

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
