import { ESex } from '@/types/user';

export type TUserUpdatePayload = {
  email?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  sex?: ESex;
};
