import { Api } from '../../../shared/api/lib';
import { TLoginPayload, TSignUpPayload } from '../model/payload.model';

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
