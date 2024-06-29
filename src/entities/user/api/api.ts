import { TUser } from '@/entities/user';
import { Api } from '@/shared/api/lib';
import { TPaginatedData, TPaginationParams } from '@/shared/api/model';

import { TUserUpdatePayload } from './model';

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
