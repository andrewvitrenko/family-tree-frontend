import axios, { AxiosInstance, AxiosRequestConfig, isAxiosError } from 'axios';

import { EMethod, TError } from '@/types/api';

export class Http {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
    });
  }

  public async get<T>(
    url: string,
    params?: Record<string, string | number>,
    headers?: AxiosRequestConfig['headers'],
  ): Promise<T> {
    return this.request(url, EMethod.GET, { params, headers });
  }

  public async post<T, D extends object>(
    url: string,
    data: D,
    config?: Omit<AxiosRequestConfig<D>, 'data'>,
  ): Promise<T> {
    return this.request<T, D>(url, EMethod.POST, { data, ...config });
  }

  public async put<T, D extends object>(
    url: string,
    data: D,
    config?: Omit<AxiosRequestConfig<D>, 'data'>,
  ): Promise<T> {
    return this.request<T, D>(url, EMethod.PUT, { data, ...config });
  }

  public async patch<T, D extends object>(
    url: string,
    data: D,
    config: Omit<AxiosRequestConfig<D>, 'data'>,
  ): Promise<T> {
    return this.request(url, EMethod.PATCH, { data, ...config });
  }

  public async remove<T>(
    url: string,
    headers?: AxiosRequestConfig['headers'],
  ): Promise<T> {
    return this.request<T>(url, EMethod.DELETE, { headers });
  }

  private async request<R, D extends object = object>(
    url: string,
    method: EMethod,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    try {
      const response = await this.instance.request<R>({
        url,
        method,
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
