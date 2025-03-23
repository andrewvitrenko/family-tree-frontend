'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC, memo, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useLogin } from '@/features/auth';
import { Input, PasswordInput, SubmitButton } from '@/shared/ui/form';

import { validationSchema } from './config/form.config';
import { TLoginForm } from './model/form.model';

export const LoginForm: FC = memo(() => {
  const { mutateAsync } = useLogin();

  const form = useForm<TLoginForm>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = useCallback(
    (values: TLoginForm) => mutateAsync(values),
    [mutateAsync],
  );

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <Input
          label="Email"
          placeholder="Please, enter your email"
          name="email"
          type="email"
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Please, enter password"
          name="password"
          required
        />
        <SubmitButton text="Login" />
      </form>
    </FormProvider>
  );
});

LoginForm.displayName = 'LoginForm';
