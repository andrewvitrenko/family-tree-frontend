'use client';

import { FC, PropsWithChildren } from 'react';

import { FullscreenLoader } from '@/components/ui';
import { useUser } from '@/hooks/use-user';

export const PageProtection: FC<PropsWithChildren> = ({ children }) => {
  const { isFetching } = useUser();

  if (isFetching) {
    return <FullscreenLoader />;
  }

  return children;
};
