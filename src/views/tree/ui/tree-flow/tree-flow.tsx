'use client';

import { Box } from '@mui/material';
import { Edge, NodeChange } from '@xyflow/react';
import { FC, memo, useCallback } from 'react';

import { useTree } from '@/entities/trees';
import Flow from '@/features/flow';
import { nodeTypes } from '@/views/tree/config/flow.config';

import { TTreeFlowProps } from './model/props.model';
import * as styles from './styles';

const TreeFlow: FC<TTreeFlowProps> = ({ nodes, treeId }) => {
  const { updateNode } = useTree();

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      for (const change of changes) {
        if (change.type === 'position' && !change.dragging) {
          updateNode({
            treeId,
            nodeId: change.id,
            data: { x: change.position?.x, y: change.position?.y },
          });
        }
      }
    },
    [treeId, updateNode],
  );

  const edges: Edge[] = [
    {
      id: '1',
      source: '777f903f-d24a-41b4-ad63-fde0d3d96f73',
      target: 'af793174-7f30-4aa7-afbb-0369d70f11c6',
      sourceHandle: 'source-bottom',
      targetHandle: 'target-top',
    },
  ];

  return (
    <Box sx={styles.container}>
      <Flow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
      />
    </Box>
  );
};

export default memo(TreeFlow);
