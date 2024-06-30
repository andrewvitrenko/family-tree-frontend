import { TPerson, TTree } from '@/entities/trees';

export const enum ESex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export type TUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex: ESex;
  persons: TPerson[];
  trees: TTree[];
};
