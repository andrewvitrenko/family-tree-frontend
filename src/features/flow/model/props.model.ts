import { ReactFlowProps } from '@xyflow/react';

import { TNode } from './node.model';

export type TFlowProps<Node extends TNode = TNode> = ReactFlowProps<Node> &
  Required<Pick<ReactFlowProps<Node>, 'onNodesChange' | 'nodes' | 'edges'>>;
