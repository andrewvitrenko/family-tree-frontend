import { FC } from 'react';

import { TTree } from '@/entities/trees';

import { ENodeType, TPersonNode } from './model/flow.model';
import TreeFlow from './ui/tree-flow';

type TTreePageProps = {
  tree: TTree;
};

const TreePage: FC<TTreePageProps> = ({ tree }) => {
  const nodes: TPersonNode[] = tree.nodes.map((node) => ({
    id: node.id,
    position: { x: node.x, y: node.y },
    type: ENodeType.PERSON,
    data: node.person,
  }));

  return <TreeFlow nodes={nodes} treeId={tree.id} />;
};

export default TreePage;
