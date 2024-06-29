import { ESex } from '@/entities/user';

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TSignUpPayload = {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex: ESex;
  password: string;
};
