import { TUser } from '@/types/user';

export type TUserStore = {
  user: TUser | null;
  setUser: (user: TUser) => void;
  clearUser: () => void;
};
