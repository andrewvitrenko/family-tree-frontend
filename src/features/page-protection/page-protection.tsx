'use client';

import { FC, PropsWithChildren } from 'react';

import { useUser } from '@/entities/user';
import { FullscreenLoader } from '@/widgets';

const PageProtection: FC<PropsWithChildren> = ({ children }) => {
  const { status } = useUser();

  if (status !== 'success') {
    return <FullscreenLoader />;
  }

  return children;
};

export default PageProtection;
