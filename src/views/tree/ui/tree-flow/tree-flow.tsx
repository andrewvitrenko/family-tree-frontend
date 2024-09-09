'use client';

import { Box } from '@mui/material';
import { FC, memo, useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import Flow from '@/features/flow';
import { nodeTypes } from '@/views/tree/config/flow.config';

import { TPersonNode } from '../../model/flow.model';
import { useTreeStore } from '../../model/store.model';
import { TTreeFlowProps } from './model/props.model';
import * as styles from './styles';

const TreeFlow: FC<TTreeFlowProps> = ({
  nodes: initialNodes,
  edges: initialEdges,
}) => {
  const { nodes, edges, onNodesChange, onEdgesChange, setEdges, setNodes } =
    useTreeStore(useShallow((state) => ({ ...state })));

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  return (
    <Box sx={styles.container}>
      <Flow<TPersonNode>
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      />
    </Box>
  );
};

export default memo(TreeFlow);
