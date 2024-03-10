import { ESex } from '../user';

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TTokens = {
  access_token: string;
};

export type TLoginResponse = TTokens;

export type TSignUpPayload = {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  sex: ESex;
  password: string;
};
