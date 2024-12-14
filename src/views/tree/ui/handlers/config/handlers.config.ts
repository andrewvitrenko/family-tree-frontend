import { HandleProps, Position } from '@xyflow/react';

import { EHandleSource } from '@/views/tree/model/flow.model';

export const handlers: HandleProps[] = [
  { id: EHandleSource.SOURCE_TOP, type: 'source', position: Position.Top },
  {
    id: EHandleSource.SOURCE_BOTTOM,
    type: 'source',
    position: Position.Bottom,
  },
  { id: EHandleSource.TARGET_TOP, type: 'target', position: Position.Top },
  {
    id: EHandleSource.TARGET_BOTTOM,
    type: 'target',
    position: Position.Bottom,
  },
];
