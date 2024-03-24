import {
  TLoginPayload,
  TLoginResponse,
  TSignUpPayload,
  TSignUpResponse,
} from '@/types/api/auth';

import { Api } from './api';

class AuthApi extends Api {
  async login(payload: TLoginPayload): Promise<TLoginResponse> {
    return this.http.post<TLoginResponse, TLoginPayload>(
      '/auth/login',
      payload,
    );
  }

  async register(payload: TSignUpPayload): Promise<TSignUpResponse> {
    return this.http.post<TSignUpResponse, TSignUpPayload>(
      '/auth/signup',
      payload,
    );
  }
}

export const Auth = new AuthApi();
