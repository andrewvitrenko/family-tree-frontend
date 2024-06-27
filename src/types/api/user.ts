import { ESex } from '@/shared/entities/user';

export type TUserUpdatePayload = {
  email?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  sex?: ESex;
};
