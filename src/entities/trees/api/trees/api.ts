import { AxiosRequestConfig } from 'axios';

import { Api } from '@/shared/api/lib';
import { TPaginatedData, TPaginationParams } from '@/shared/api/model';

import { TTree } from '../../model';
import { TCreateTreePayload, TUpdateTreePayload } from './model';

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
}

export const TreesApi = new Trees();
