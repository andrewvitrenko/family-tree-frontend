'use client';

import { FC, PropsWithChildren } from 'react';

import { useUser } from '@/shared/api';
import { FullscreenLoader } from '@/widgets';

export const PageProtection: FC<PropsWithChildren> = ({ children }) => {
  const { status } = useUser();

  if (status !== 'success') {
    return <FullscreenLoader />;
  }

  return children;
};
