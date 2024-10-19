import axios, { AxiosInstance, AxiosRequestConfig, isAxiosError } from 'axios';

import { EMethod, TError } from '@/shared/api';

export class Http {
  private axios: AxiosInstance;

  constructor(module?: string) {
    this.axios = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_HOST}/${module}`,
      /**
       * need these fields to send cookies in cross domain XHR requests
       */
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': ['http://localhost:3000', '*'],
        'Access-Control-Allow-Credentials': true,
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response?.status;
        const originRequest = error.config;
        if (status === 403 && !originRequest.retry) {
          originRequest.retry = true;
          await this.axios.request({
            url: `${process.env.NEXT_PUBLIC_API_HOST}/auth/refresh`,
            method: EMethod.POST,
          });
          return this.axios.request(originRequest);
        }
        return Promise.reject(error);
      },
    );
  }

  public async get<T>(
    url: string,
    params?: Record<string, string | number>,
    headers?: AxiosRequestConfig['headers'],
  ): Promise<T> {
    return this.request(url, EMethod.GET, { params, headers });
  }

  public async post<T, D extends object = object>(
    url: string,
    data?: D,
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
    config?: Omit<AxiosRequestConfig<D>, 'data'>,
  ): Promise<T> {
    return this.request<T, D>(url, EMethod.PATCH, { data, ...config });
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
    config: AxiosRequestConfig<D> = {},
  ): Promise<R> {
    try {
      const response = await this.axios.request<R>({
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
      const errorMessage =
        e.response?.data.message ?? 'Network error. Please try again later';
      const messages = [errorMessage].flat();

      throw new Error(messages[0]);
    } else {
      return Promise.reject(e);
    }
  }
}
