import { TAddRelativePayload } from '@/entities/trees/api/nodes';

export type TConnectionForm = Omit<TAddRelativePayload, 'x' | 'y'>;
