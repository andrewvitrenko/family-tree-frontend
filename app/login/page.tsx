import { Metadata, NextPage } from 'next';

import LoginPage from '@/views/login';

export const metadata: Metadata = {
  title: 'Family tree | Login',
};

const Login: NextPage = () => {
  return <LoginPage />;
};

export default Login;
