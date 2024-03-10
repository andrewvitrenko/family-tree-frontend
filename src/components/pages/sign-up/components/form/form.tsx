'use client';

import Box from '@mui/material/Box';
import { FC, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, Input } from '@/components/ui';

import { TSignUpForm } from '../../types/form';
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
          <Input name="password" type="password" required label="Password" />
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
