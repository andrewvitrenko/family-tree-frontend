import { Position } from '@xyflow/react';

import { ESex } from '@/entities/user';

import { THandle } from '../model/handle.model';

export const defaultHandlers: THandle[] = [
  { id: 'top', type: 'source', position: Position.Top },
  { id: 'bottom', type: 'source', position: Position.Bottom },
  { id: 'top', type: 'target', position: Position.Top },
  { id: 'bottom', type: 'target', position: Position.Bottom },
];

export const sexBasedHandlers: Record<ESex, THandle[]> = {
  [ESex.MALE]: [
    ...defaultHandlers,
    { id: 'left', type: 'source', position: Position.Left },
    { id: 'left', type: 'target', position: Position.Left },
  ],
  [ESex.FEMALE]: [
    ...defaultHandlers,
    { id: 'right', type: 'source', position: Position.Right },
    { id: 'right', type: 'target', position: Position.Right },
  ],
};
