import { ESex } from '@/types/user';

export type TSignUpForm = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  sex: ESex;
  birthDate: string;
};
