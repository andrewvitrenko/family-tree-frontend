import { Edge } from '@xyflow/react';

import { TNode, TRelation } from '@/entities/trees';

import { EHandleSource, ENodeType, TPersonNode } from '../model/flow.model';

export class Adapter {
  constructor() {}

  public static adaptNode(node: TNode): TPersonNode {
    return {
      id: node.id,
      position: { x: node.x, y: node.y },
      type: ENodeType.PERSON,
      data: node.person,
      draggable: false,
    };
  }

  public static adaptEdge(relation: TRelation): Edge {
    return {
      id: relation.id,
      source: relation.parentId,
      target: relation.childId,
      sourceHandle: EHandleSource.SOURCE_BOTTOM,
      targetHandle: EHandleSource.TARGET_TOP,
    };
  }
}
