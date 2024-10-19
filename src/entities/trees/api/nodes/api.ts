import { Api } from '@/shared/api/lib';

import { TNode } from '../../model';
import { TAddRelativePayload, TUpdateNodePayload } from './model';

class Nodes extends Api {
  constructor() {
    super('nodes');
  }

  addParent(
    treeId: string,
    nodeId: string,
    payload: TAddRelativePayload,
  ): Promise<TNode> {
    return this.http.post<TNode, TAddRelativePayload>(
      `/${treeId}/${nodeId}/add-parent`,
      payload,
    );
  }

  addChild(
    treeId: string,
    nodeId: string,
    payload: TAddRelativePayload,
  ): Promise<TNode> {
    return this.http.post<TNode, TAddRelativePayload>(
      `/${treeId}/${nodeId}/add-child`,
      payload,
    );
  }

  update(
    treeId: string,
    nodeId: string,
    payload: TUpdateNodePayload,
  ): Promise<TNode> {
    return this.http.patch<TNode, TUpdateNodePayload>(
      `/${treeId}/${nodeId}`,
      payload,
    );
  }

  remove(treeId: string, nodeId: string): Promise<TNode> {
    return this.http.remove<TNode>(`/${treeId}/${nodeId}`);
  }
}

export const NodesApi = new Nodes();
