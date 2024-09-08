import { AxiosRequestConfig } from 'axios';

import { Api } from '@/shared/api/lib';
import { TPaginatedData, TPaginationParams } from '@/shared/api/model';

import { TNode, TTree } from '../model';
import {
  TAddRelativePayload,
  TCreateTreePayload,
  TUpdateNodePayload,
  TUpdateTreePayload,
} from './model';

class Trees extends Api {
  constructor() {
    super('trees');
  }

  getOne(id: string, headers?: AxiosRequestConfig['headers']): Promise<TTree> {
    return this.http.get<TTree>(`/${id}`, undefined, headers);
  }

  getMany(params?: TPaginationParams): Promise<TPaginatedData<TTree>> {
    return this.http.get<TPaginatedData<TTree>>('/', params);
  }

  create(payload: TCreateTreePayload): Promise<TTree> {
    return this.http.post<TTree, TCreateTreePayload>('/', payload);
  }

  update(id: string, payload: TUpdateTreePayload): Promise<TTree> {
    return this.http.patch<TTree, TUpdateTreePayload>(`/${id}`, payload);
  }

  remove(id: string): Promise<TTree> {
    return this.http.remove<TTree>(`/${id}`);
  }

  addParent(
    treeId: string,
    childId: string,
    payload: TAddRelativePayload,
  ): Promise<TNode> {
    return this.http.post<TNode, TAddRelativePayload>(
      `/${treeId}/${childId}/add-parent`,
      payload,
    );
  }

  addChild(
    treeId: string,
    parentId: string,
    payload: TAddRelativePayload,
  ): Promise<TNode> {
    return this.http.post<TNode, TAddRelativePayload>(
      `/${treeId}/${parentId}/add-child`,
      payload,
    );
  }

  updateNode(
    treeId: string,
    nodeId: string,
    payload: TUpdateNodePayload,
  ): Promise<TNode> {
    return this.http.patch<TNode, TUpdateNodePayload>(
      `/${treeId}/node/${nodeId}`,
      payload,
    );
  }

  removeNode(treeId: string, nodeId: string): Promise<TNode> {
    return this.http.remove<TNode>(`/${treeId}/node/${nodeId}`);
  }
}

export const TreesApi = new Trees();
