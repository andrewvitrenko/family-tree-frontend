import { create } from 'zustand';

import { TUser } from '@/entities/user';

type TUserStore = {
  user: TUser | null;
  setUser: (user: TUser) => void;
  clearUser: () => void;
};

export const useUserStore = create<TUserStore>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: { ...user } })),
  clearUser: () => set(() => ({ user: null })),
}));
