import { AxiosInstance, AxiosResponse, isAxiosError } from 'axios';

import { TError } from '@/types/api';
import {
  TLoginPayload,
  TLoginResponse,
  TSignUpPayload,
  TSignUpResponse,
} from '@/types/api/auth';

import { instance } from '.';

// add service that will handle all the requests
// in this service create a normalizeError method
// this method should watch for the error and find proper error message for that in case it is network error or some status code
// also if there is a 400 error that tells something - parse that

class Auth {
  constructor(private instance: AxiosInstance) {}

  async login(payload: TLoginPayload): Promise<TLoginResponse> {
    try {
      const response = await this.instance.post<
        TLoginPayload,
        AxiosResponse<TLoginResponse>
      >('/auth/login', payload);

      return response.data;
    } catch (e) {
      return this.parseError(e);
    }
  }

  async register(payload: TSignUpPayload): Promise<TSignUpResponse> {
    try {
      const response = await this.instance.post<
        TSignUpPayload,
        AxiosResponse<TSignUpResponse>
      >('/auth/signup', payload);

      return response.data;
    } catch (e) {
      return this.parseError(e);
    }
  }

  parseError(e: unknown) {
    if (isAxiosError<TError>(e)) {
      const messages = [e.response!.data.message].flat();

      throw new Error(messages[0]);
    } else {
      return Promise.reject(e);
    }
  }
}

export const AuthApi = new Auth(instance);
