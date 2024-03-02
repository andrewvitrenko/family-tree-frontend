'use client';

import Box from '@mui/material/Box';
import { FC, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, Input } from '@/components/ui-kit';

import { TLoginForm } from '../../types/form';
import * as styles from './styles';

const Form: FC = () => {
  const methods = useForm<TLoginForm>({ reValidateMode: 'onBlur' });
  const { formState, handleSubmit } = methods;

  const onSubmit = useCallback(async (values: TLoginForm) => {
    console.log(values);
  }, []);

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
          <Input
            label="Password"
            placeholder="Please, enter password"
            name="password"
            required
            type="password"
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
