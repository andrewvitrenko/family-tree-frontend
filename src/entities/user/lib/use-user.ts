'use client';

import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useAuth } from '@/features/auth';
import { useToast } from '@/features/toast';

import { UserApi } from '../api';
import { useUserStore } from '../model';

export type TUseUser = {
  status: QueryObserverResult['status'];
};

export const useUser = (): TUseUser => {
  const toast = useToast();

  const { logout } = useAuth();

  const { setUser } = useUserStore(
    useShallow((state) => ({ setUser: state.setUser })),
  );

  const { status, data, error } = useQuery({
    queryKey: ['user.me'],
    queryFn: () => UserApi.getMe(),
  });

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      logout();
    }
  }, [error, logout, toast]);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  return { status };
};
