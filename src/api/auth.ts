import { TLoginPayload, TSignUpPayload } from '@/types/api/auth';

import { Api } from './api';

class AuthApi extends Api {
  login(payload: TLoginPayload): Promise<void> {
    return this.http.post<void, TLoginPayload>('/auth/login', payload);
  }

  register(payload: TSignUpPayload): Promise<void> {
    return this.http.post<void, TSignUpPayload>('/auth/signup', payload);
  }

  logout(): Promise<void> {
    return this.http.post('/auth/logout');
  }
}

export const Auth = new AuthApi();
