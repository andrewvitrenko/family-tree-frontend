import { TPerson } from '@/entities/trees';
import { TNode } from '@/features/flow';

export enum ENodeType {
  PERSON = 'person',
}

export enum EHandleSource {
  SOURCE_TOP = 'source-top',
  SOURCE_BOTTOM = 'source-bottom',
  TARGET_TOP = 'target-top',
  TARGET_BOTTOM = 'target-bottom',
}

export type TPersonNode = TNode<TPerson, ENodeType.PERSON>;
