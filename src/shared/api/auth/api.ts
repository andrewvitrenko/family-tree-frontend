import { TLoginPayload, TSignUpPayload } from '@/types/api/auth';

import { Api } from '../api';

class Auth extends Api {
  constructor() {
    super('auth');
  }

  login(payload: TLoginPayload): Promise<void> {
    return this.http.post<void, TLoginPayload>('/login', payload);
  }

  register(payload: TSignUpPayload): Promise<void> {
    return this.http.post<void, TSignUpPayload>('/signup', payload);
  }

  logout(): Promise<void> {
    return this.http.post('/logout');
  }
}

export const AuthApi = new Auth();
