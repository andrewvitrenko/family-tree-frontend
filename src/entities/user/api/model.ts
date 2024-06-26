import { ESex } from '@/entities/user';

export type TUserUpdatePayload = {
  email?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  sex?: ESex;
};
