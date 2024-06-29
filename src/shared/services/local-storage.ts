import { ELocalStorageKey, TLocalStorageData } from '@/types/local-storage';

class LocalStorageService {
  get<K extends ELocalStorageKey>(key: K): TLocalStorageData[K] | null;
  get<K extends ELocalStorageKey, D extends TLocalStorageData[K]>(
    key: K,
    defaultValue: D,
  ): D;
  get<K extends ELocalStorageKey, D extends TLocalStorageData[K]>(
    key: K,
    defaultValue?: D,
  ): D | null {
    const savedValue = localStorage.getItem(key);

    if (!savedValue) {
      return defaultValue ?? null;
    }

    return JSON.parse(savedValue) as D;
  }

  set<K extends ELocalStorageKey>(key: K, value: TLocalStorageData[K]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove<K extends ELocalStorageKey>(key: K) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

export const LocalStorage = new LocalStorageService();
