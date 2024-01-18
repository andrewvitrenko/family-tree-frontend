import './layout.css';

import { Metadata } from 'next';

import { LayoutProps } from '@/types/layout';

export const metadata: Metadata = {
  title: 'Family tree | Login',
};

const LoginLayout = ({ children }: LayoutProps) => {
  return children;
};

export default LoginLayout;
