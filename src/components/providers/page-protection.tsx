'use client';

import { FC, PropsWithChildren } from 'react';

import { useUser } from '@/hooks/use-user';
import { FullscreenLoader } from '@/shared/ui';

export const PageProtection: FC<PropsWithChildren> = ({ children }) => {
  const { status } = useUser();

  if (status !== 'success') {
    return <FullscreenLoader />;
  }

  return children;
};
