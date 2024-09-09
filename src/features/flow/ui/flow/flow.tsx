'use client';

import '@xyflow/react/dist/style.css';

import Box from '@mui/material/Box';
import { Background, Controls, ReactFlow } from '@xyflow/react';

import { TNode } from '../../model/node.model';
import { TFlowProps } from '../../model/props.model';
import * as styles from './styles';

const Flow = <T extends TNode>(props: TFlowProps<T>) => {
  return (
    <Box sx={styles.container}>
      <ReactFlow {...props}>
        <Background />
        <Controls />
      </ReactFlow>
    </Box>
  );
};

export default Flow;
