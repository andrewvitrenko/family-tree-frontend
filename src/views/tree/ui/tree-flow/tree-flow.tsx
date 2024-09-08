'use client';

import { Box } from '@mui/material';
import { NodeChange } from '@xyflow/react';
import { useParams } from 'next/navigation';
import { FC, memo, useCallback } from 'react';

import { useTree } from '@/entities/trees';
import Flow from '@/features/flow';
import { nodeTypes } from '@/views/tree/config/flow.config';

import { TRouteParams } from '../../model/route.model';
import { TTreeFlowProps } from './model/props.model';
import * as styles from './styles';

const TreeFlow: FC<TTreeFlowProps> = ({ nodes, edges }) => {
  const params = useParams<TRouteParams>();

  const { updateNode } = useTree();

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      for (const change of changes) {
        if (change.type === 'position' && !change.dragging) {
          updateNode({
            treeId: params.id,
            nodeId: change.id,
            data: { x: change.position?.x, y: change.position?.y },
          });
        }
      }
    },
    [updateNode, params.id],
  );

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
