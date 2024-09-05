import { styled } from '@mui/material';
import { Handle as ReactFlowHandle } from '@xyflow/react';
import { FC, memo } from 'react';

import { handlers } from './config/handlers.config';

const Handle = styled(ReactFlowHandle)({
  width: 0,
  height: 0,
  minHeight: 'unset',
  maxHeight: 'unset',
});

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
