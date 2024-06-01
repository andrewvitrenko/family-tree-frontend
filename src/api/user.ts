import { Api } from '@/api/api';
import { TPaginatedData, TQueryParams } from '@/types/api';
import { TUserUpdatePayload } from '@/types/api/user';
import { TUser } from '@/types/user';

class UserApi extends Api {
  getMe(): Promise<TUser> {
    return this.http.get<TUser>('/users/me', true);
  }

  get(id: string): Promise<TUser> {
    return this.http.get<TUser>(`/users/${id}`, true);
  }

  update(payload: TUserUpdatePayload): Promise<TUser> {
    return this.http.patch<TUser, TUserUpdatePayload>('/users', payload);
  }

  getMany(params?: TQueryParams): Promise<TPaginatedData<TUser>> {
    return this.http.get<TPaginatedData<TUser>>('/users', true, params);
  }
}

export const User = new UserApi();
