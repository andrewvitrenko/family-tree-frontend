export const enum ELocalStorageKey {
  ACCESS_TOKEN = 'access_token',
}

export type TLocalStorageData = {
  [ELocalStorageKey.ACCESS_TOKEN]: string;
};
