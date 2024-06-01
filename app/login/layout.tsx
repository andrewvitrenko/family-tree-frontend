import { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Family tree | Login',
};

const LoginLayout: FC<PropsWithChildren> = ({ children }) => {
  return children;
};

export default LoginLayout;
