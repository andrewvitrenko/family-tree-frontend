import { styled } from '@mui/material';
import {
  Handle as ReactFlowHandle,
  HandleProps,
  Position,
} from '@xyflow/react';
import { FC, memo } from 'react';

import { handlers } from './config/handlers.config';

const Handle = styled(ReactFlowHandle)<HandleProps>(({ position }) => ({
  width: 0,
  height: 0,
  minHeight: 'unset',
  maxHeight: 'unset',
  border: 'none',
  ...(position === Position.Top && { top: '1rem' }),
  ...(position === Position.Bottom && { bottom: '1rem' }),
}));

const Handlers: FC = () => {
  return (
    <>
      {handlers.map((handler) => (
        <Handle key={handler.id} {...handler} />
      ))}
    </>
  );
};

export default memo(Handlers);
