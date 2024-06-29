import { TTree } from '@/shared/entities/tree';
import { TCreateTreePayload, TUpdateTreePayload } from '@/types/api/tree';

import { Api } from '../api';
import { TPaginatedData, TPaginationParams } from '../types';

class Trees extends Api {
  constructor() {
    super('trees');
  }

  getOne(id: string): Promise<TTree> {
    return this.http.get<TTree>(`/${id}`);
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
}

export const TreesApi = new Trees();
