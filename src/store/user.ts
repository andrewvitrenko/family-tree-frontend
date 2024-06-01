import { create } from 'zustand';

import { TUserStore } from '@/types/store/user';

export const useUserStore = create<TUserStore>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: { ...user } })),
}));
