export type TError = {
  error: string;
  message: string | string[];
  code: number;
};

export const enum EMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
