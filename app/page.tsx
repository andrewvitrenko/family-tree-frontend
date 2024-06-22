import { NextPage } from 'next';

import HomePage from '@/components/pages/home';
import { PageProtection } from '@/components/providers';

const Home: NextPage = () => {
  return (
    <PageProtection>
      <HomePage />
    </PageProtection>
  );
};

export default Home;
