import { Edge } from '@xyflow/react';
import { FC, useMemo } from 'react';

import { TTree } from '@/entities/trees';

import { ENodeType, TPersonNode } from './model/flow.model';
import TreeFlow from './ui/tree-flow';

type TTreePageProps = {
  tree: TTree;
};

const TreePage: FC<TTreePageProps> = ({ tree }) => {
  const nodes: TPersonNode[] = useMemo(
    () =>
      tree.nodes.map((node) => ({
        id: node.id,
        position: { x: node.x, y: node.y },
        type: ENodeType.PERSON,
        data: node.person,
        draggable: false,
      })),
    [tree.nodes],
  );

  const edges: Edge[] = useMemo(() => {
    const relations = tree.nodes.flatMap(({ children }) => children);

    return relations.map(({ childId, parentId, id }) => ({
      id,
      source: parentId,
      target: childId,
      sourceHandle: 'source-bottom',
      targetHandle: 'target-top',
    }));
  }, [tree.nodes]);

  return <TreeFlow nodes={nodes} edges={edges} />;
};

export default TreePage;
