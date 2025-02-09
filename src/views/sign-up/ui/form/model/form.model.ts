import { ESex } from '@/entities/user';

export type TSignUpForm = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  sex: ESex;
  dateOfBirth: Date;
};
