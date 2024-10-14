import { Edge } from '@xyflow/react';
import { FC, useMemo } from 'react';

import { TTree } from '@/entities/trees';

import { Adapter } from './lib';
import { TPersonNode } from './model/flow.model';
import TreeFlow from './ui/tree-flow';

type TTreePageProps = {
  tree: TTree;
};

const TreePage: FC<TTreePageProps> = ({ tree }) => {
  const nodes: TPersonNode[] = useMemo(
    () => tree.nodes.map(Adapter.adaptNode),
    [tree.nodes],
  );

  const edges: Edge[] = useMemo(() => {
    return tree.nodes
      .flatMap(({ children }) => children)
      .map(Adapter.adaptEdge);
  }, [tree.nodes]);

  return <TreeFlow nodes={nodes} edges={edges} />;
};

export default TreePage;
