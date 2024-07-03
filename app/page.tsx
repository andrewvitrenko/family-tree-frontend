import { NextPage } from 'next';

import { PageProtection } from '@/features/page-protection';
import HomePage from '@/views/home';

const Home: NextPage = () => {
  return (
    <PageProtection>
      <HomePage />
    </PageProtection>
  );
};

export default Home;
