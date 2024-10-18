import { Metadata, NextPage } from 'next';

import SignUpPage from '@/views/sign-up';

export const metadata: Metadata = {
  title: 'Family tree | Sign up',
};

const SignUp: NextPage = () => {
  return <SignUpPage />;
};

export default SignUp;
