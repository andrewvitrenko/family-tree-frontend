import { TAddRelativePayload } from '@/entities/trees/api/model';

export type TConnectionForm = Omit<TAddRelativePayload, 'x' | 'y'>;
