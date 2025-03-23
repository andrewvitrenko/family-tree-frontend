'use client';

import { FC, memo, useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import Flow from '@/features/flow';
import { nodeTypes } from '@/views/tree/config/flow.config';
import { useTreeStore } from '@/views/tree/store/tree.store';

import { TPersonNode } from '../../model/flow.model';
import { TTreeFlowProps } from './model/props.model';

export const TreeFlow: FC<TTreeFlowProps> = memo(
  ({ nodes: initialNodes, edges: initialEdges }) => {
    const { nodes, edges, onNodesChange, onEdgesChange, setEdges, setNodes } =
      useTreeStore(useShallow((state) => ({ ...state })));

    useEffect(() => {
      setNodes(initialNodes);
      setEdges(initialEdges);
    }, [initialNodes, initialEdges, setNodes, setEdges]);

    return (
      <div className="h-dvh">
        <Flow<TPersonNode>
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
        />
      </div>
    );
  },
);

TreeFlow.displayName = 'TreeFlow';
