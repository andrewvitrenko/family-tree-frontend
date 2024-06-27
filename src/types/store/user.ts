import { TUser } from '@/shared/entities/user';

export type TUserStore = {
  user: TUser | null;
  setUser: (user: TUser) => void;
  clearUser: () => void;
};
