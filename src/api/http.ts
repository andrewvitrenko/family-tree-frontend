import axios, { AxiosInstance, AxiosRequestConfig, isAxiosError } from 'axios';

import { LocalStorage } from '@/services';
import { EMethod, TError } from '@/types/api';
import { ELocalStorageKey } from '@/types/local-storage';

export class Http {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
    });
  }

  public async get<T>(
    url: string,
    auth?: boolean,
    params?: Record<string, string | number>,
    headers?: AxiosRequestConfig['headers'],
  ): Promise<T> {
    return this.request(url, EMethod.GET, auth, { params, headers });
  }

  public async post<T, D extends object>(
    url: string,
    data: D,
    auth?: boolean,
    config?: Omit<AxiosRequestConfig<D>, 'data'>,
  ): Promise<T> {
    return this.request<T, D>(url, EMethod.POST, auth, { data, ...config });
  }

  public async put<T, D extends object>(
    url: string,
    data: D,
    config?: Omit<AxiosRequestConfig<D>, 'data'>,
  ): Promise<T> {
    return this.request<T, D>(url, EMethod.PUT, true, { data, ...config });
  }

  public async patch<T, D extends object>(
    url: string,
    data: D,
    config?: Omit<AxiosRequestConfig<D>, 'data'>,
  ): Promise<T> {
    return this.request<T, D>(url, EMethod.PATCH, true, { data, ...config });
  }

  public async remove<T>(
    url: string,
    headers?: AxiosRequestConfig['headers'],
  ): Promise<T> {
    return this.request<T>(url, EMethod.DELETE, true, { headers });
  }

  private async request<R, D extends object = object>(
    url: string,
    method: EMethod,
    auth: boolean = false,
    { headers, ...config }: AxiosRequestConfig<D> = {},
  ): Promise<R> {
    try {
      const response = await this.instance.request<R>({
        url,
        method,
        headers: {
          ...headers,
          ...(auth && {
            Authorization: `Bearer ${LocalStorage.get(
              ELocalStorageKey.ACCESS_TOKEN,
            )}`,
          }),
        },
        ...config,
      });

      return response.data;
    } catch (e) {
      return this.parseError(e);
    }
  }

  private parseError(e: unknown) {
    if (isAxiosError<TError>(e)) {
      const messages = [e.response!.data.message].flat();

      throw new Error(messages[0]);
    } else {
      return Promise.reject(e);
    }
  }
}
