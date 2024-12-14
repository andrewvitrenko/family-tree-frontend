import { ESex } from '@/entities/user';

export type TAddRelativePayload = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  dateOfDeath?: string;
  sex: ESex;
  x: number;
  y: number;
};

export type TUpdateNodePayload = {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  dateOfDeath?: string;
  sex?: ESex;
  x?: number;
  y?: number;
};
