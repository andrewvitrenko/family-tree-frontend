import { ESex } from '@/shared/entities/user';

export type TSignUpForm = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  sex: ESex;
  dateOfBirth: string;
};
