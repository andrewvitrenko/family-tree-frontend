import { Handle } from '@xyflow/react';
import { FC, memo, useMemo } from 'react';

import { sexBasedHandlers } from './config/handlers.config';
import { THandlersProps } from './model/props.model';

const Handlers: FC<THandlersProps> = ({ sex }) => {
  const handlersConfig = useMemo(() => sexBasedHandlers[sex], [sex]);

  return (
    <>
      {handlersConfig.map((handler) => (
        <Handle key={handler.id} {...handler} />
      ))}
    </>
  );
};

export default memo(Handlers);
