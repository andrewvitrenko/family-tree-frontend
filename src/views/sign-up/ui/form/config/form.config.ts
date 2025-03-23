import { z } from 'zod';

import { ESex } from '@/entities/user';
import { PASSWORD_REGEX } from '@/shared/config/validation';
import { TSelectOption } from '@/shared/ui/form/select';

export const sexes: TSelectOption<ESex>[] = [
  { label: 'Male', value: ESex.MALE },
  { label: 'Female', value: ESex.FEMALE },
];

export const validationSchema = z
  .object({
    email: z.string().email(),
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    password: z
      .string()
      .regex(
        PASSWORD_REGEX,
        'Password must have UPPERCASE and lowercase letter, numbers',
      ),
    confirmPassword: z
      .string()
      .regex(
        PASSWORD_REGEX,
        'Password must have UPPERCASE and lowercase letter, numbers',
      ),
    dateOfBirth: z.date().max(new Date(), 'Please select valid date of birth'),
    sex: z.enum([ESex.FEMALE, ESex.MALE]),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
