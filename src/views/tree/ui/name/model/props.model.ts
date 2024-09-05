import { TPerson } from '@/entities/trees';

export type TNameProps = Pick<TPerson, 'firstName' | 'lastName'>;
