'use client';

import '@xyflow/react/dist/style.css';

import Box from '@mui/material/Box';
import {
  addEdge,
  Background,
  Connection,
  Controls,
  Edge,
  NodeChange,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import { FC, memo, useCallback } from 'react';

import { TFlowProps } from '../../model/props.model';
import * as styles from './styles';

const Flow: FC<TFlowProps> = ({
  nodes: initialNodes,
  onNodesChange: handleNodesChange,
  ...props
}) => {
  const [nodes, , onNodesStateChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesStateChange] = useEdgesState<Edge>([]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      handleNodesChange?.(changes);
      onNodesStateChange(changes);
    },
    [onNodesStateChange, handleNodesChange],
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds));
    },
    [setEdges],
  );

  return (
    <Box sx={styles.container}>
      <ReactFlow
        {...props}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesStateChange}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </Box>
  );
};

export default memo(Flow);
