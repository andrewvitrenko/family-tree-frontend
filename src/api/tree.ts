import { Api } from '@/api/api';
import { TPaginatedData, TQueryParams } from '@/types/api';
import { TCreateTreePayload, TUpdateTreePayload } from '@/types/api/tree';
import { TTree } from '@/types/tree';

class TreeApi extends Api {
  getOne(id: string): Promise<TTree> {
    return this.http.get<TTree>(`/trees/${id}`, true);
  }

  getMany(params?: TQueryParams): Promise<TPaginatedData<TTree>> {
    return this.http.get<TPaginatedData<TTree>>('/trees/', true, params);
  }

  create(payload: TCreateTreePayload): Promise<TTree> {
    return this.http.post<TTree, TCreateTreePayload>('/trees', payload, true);
  }

  update(id: string, payload: TUpdateTreePayload): Promise<TTree> {
    return this.http.patch<TTree, TUpdateTreePayload>(`/trees/${id}`, payload);
  }

  remove(id: string): Promise<TTree> {
    return this.http.remove<TTree>(`/trees/${id}`);
  }
}

export const Tree = new TreeApi();
