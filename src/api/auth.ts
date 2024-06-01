import {
  TLoginPayload,
  TLoginResponse,
  TSignUpPayload,
  TSignUpResponse,
} from '@/types/api/auth';

import { Api } from './api';

class AuthApi extends Api {
  login(payload: TLoginPayload): Promise<TLoginResponse> {
    return this.http.post<TLoginResponse, TLoginPayload>(
      '/auth/login',
      payload,
    );
  }

  register(payload: TSignUpPayload): Promise<TSignUpResponse> {
    return this.http.post<TSignUpResponse, TSignUpPayload>(
      '/auth/signup',
      payload,
    );
  }
}

export const Auth = new AuthApi();
