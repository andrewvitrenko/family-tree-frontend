import { ComponentType } from 'react';

import { TPerson } from '@/entities/trees';
import { TNodeProps } from '@/features/flow/model/node.model';

import { ENodeType } from '../model/flow.model';
import PersonNode from '../ui/person-node';

export const nodeTypes: Record<
  ENodeType,
  ComponentType<TNodeProps<TPerson>>
> = {
  [ENodeType.PERSON]: PersonNode,
};
