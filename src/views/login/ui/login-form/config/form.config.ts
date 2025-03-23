import { z } from 'zod';

import { PASSWORD_REGEX } from '@/shared/config/validation';

export const validationSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z
    .string()
    .min(8, 'Password is too short')
    .max(24, 'Password is too long')
    .regex(
      PASSWORD_REGEX,
      'Password should contain Uppercase and lowercase letters and numbers',
    ),
});
