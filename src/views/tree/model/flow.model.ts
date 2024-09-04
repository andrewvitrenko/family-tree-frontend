import { TPerson } from '@/entities/trees';
import { TNode } from '@/features/flow';

export enum ENodeType {
  PERSON = 'person',
}

export type TPersonNode = TNode<TPerson, ENodeType.PERSON>;
