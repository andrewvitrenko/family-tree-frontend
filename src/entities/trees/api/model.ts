import { ESex } from '@/entities/user';

export type TCreateTreePayload = {
  name: string;
};

export type TUpdateTreePayload = {
  name: string;
};

export type TAddNodePayload = {
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
