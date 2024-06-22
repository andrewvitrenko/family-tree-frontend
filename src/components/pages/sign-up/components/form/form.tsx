'use client';

import { Box } from '@mui/material';
import { FC, memo, useCallback } from 'react';
import { FieldValues, FormProvider, useForm, Validate } from 'react-hook-form';

import {
  Button,
  DateInput,
  Input,
  PasswordInput,
  Select,
} from '@/components/ui';
import { PASSWORD_REGEX } from '@/constants/validation';
import { useAuth } from '@/hooks/use-auth';
import { omit } from '@/utils';

import { TSignUpForm } from '../../types/form';
import { sexes } from './constants';
import * as styles from './styles';

const Form: FC = () => {
  const { signup, isRegistering } = useAuth();

  const methods = useForm<TSignUpForm>({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });
  const { handleSubmit, formState, watch } = methods;

  const onConfirmPasswordValidate: Validate<string, FieldValues> = useCallback(
    (value) => {
      if (watch('password') !== value) {
        return 'Passwords do not match';
      }

      return undefined;
    },
    [watch],
  );

  const onSubmit = useCallback(
    (values: TSignUpForm) => signup(omit(values, 'confirmPassword')),
    [signup],
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
            name="dateOfBirth"
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
            validate={onConfirmPasswordValidate}
          />
          <Button
            type="submit"
            sx={styles.button}
            disabled={!formState.isValid}
            loading={isRegistering}
          >
            Sign up
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default memo(Form);
