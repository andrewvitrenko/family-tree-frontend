import { TUser } from '@/shared/entities/user';
import { TUserUpdatePayload } from '@/types/api/user';

import { Api } from '../api';
import { TPaginatedData, TPaginationParams } from '../types';

class User extends Api {
  constructor() {
    super('users');
  }

  getMe(): Promise<TUser> {
    return this.http.get<TUser>('/me');
  }

  get(id: string): Promise<TUser> {
    return this.http.get<TUser>(`/${id}`);
  }

  update(payload: TUserUpdatePayload): Promise<TUser> {
    return this.http.patch<TUser, TUserUpdatePayload>('/', payload);
  }

  getMany(params?: TPaginationParams): Promise<TPaginatedData<TUser>> {
    return this.http.get<TPaginatedData<TUser>>('/', params);
  }
}

export const UserApi = new User();
