import { HandleProps, Position } from '@xyflow/react';

export const handlers: HandleProps[] = [
  { id: 'source-top', type: 'source', position: Position.Top },
  { id: 'source-bottom', type: 'source', position: Position.Bottom },
  { id: 'target-top', type: 'target', position: Position.Top },
  { id: 'target-bottom', type: 'target', position: Position.Bottom },
];
