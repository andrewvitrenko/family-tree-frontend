import { TPerson } from '@/entities/trees';

export type TDatesProps = Pick<TPerson, 'dateOfBirth' | 'dateOfDeath'>;
