import { Edge } from '@xyflow/react';

import { TPersonNode } from '@/views/tree/model/flow.model';

export type TTreeFlowProps = {
  nodes: TPersonNode[];
  edges: Edge[];
};
