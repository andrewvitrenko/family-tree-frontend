import { ESex } from '../user';

export type TTokens = {
  access_token: string;
};

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TLoginResponse = TTokens;

export type TSignUpPayload = {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex: ESex;
  password: string;
};

export type TSignUpResponse = TTokens;
