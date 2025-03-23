'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { formatISO } from 'date-fns';
import { FC, memo, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useSignUp } from '@/features/auth';
import { omit } from '@/shared/lib';
import {
  DateInput,
  Input,
  PasswordInput,
  Select,
  SubmitButton,
} from '@/shared/ui/form';
import { TSignUpForm } from '@/views/sign-up/ui/form/model/form.model';

import { sexes, validationSchema } from './config/form.config';

const Form: FC = () => {
  const { mutateAsync } = useSignUp();

  const methods = useForm<TSignUpForm>({
    reValidateMode: 'onChange',
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = useCallback(
    async ({ dateOfBirth, ...payload }: TSignUpForm) => {
      await mutateAsync({
        dateOfBirth: formatISO(dateOfBirth),
        ...omit(payload, ['confirmPassword']),
      });
    },
    [mutateAsync],
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <Input
            label="Email"
            placeholder="Enter email"
            name="email"
            type="email"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input type="text" label="First name" name="firstName" required />
            <Input type="text" name="lastName" label="Last name" required />
          </div>
          <Select
            name="sex"
            required
            placeholder="Please select your gender"
            options={sexes}
          />
          <DateInput
            name="dateOfBirth"
            placeholder="Birth date"
            required
            maxDate={new Date()}
          />
          <PasswordInput name="password" required label="Password" />
          <PasswordInput
            name="confirmPassword"
            required
            label="Confirm password"
          />
          <SubmitButton text="Sign up" />
        </div>
      </form>
    </FormProvider>
  );
};

export default memo(Form);
