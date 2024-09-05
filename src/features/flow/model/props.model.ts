import { ReactFlowProps } from '@xyflow/react';

import { TNode } from './node.model';

export type TFlowProps<
  D extends Record<string, unknown> = Record<string, unknown>,
  T extends string = string,
> = ReactFlowProps<TNode<D, T>>;
