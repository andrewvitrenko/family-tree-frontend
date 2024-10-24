import { TAddRelativePayload } from '@/entities/trees/api/nodes';

export type TCreateNodeForm = Omit<
  TAddRelativePayload,
  'x' | 'y' | 'dateOfBirth' | 'dateOfDeath'
> & {
  dateOfBirth: Date;
  dateOfDeath?: Date;
};
