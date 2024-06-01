import { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Family tree | Sign up',
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return children;
};

export default Layout;
