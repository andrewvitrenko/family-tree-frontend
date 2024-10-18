import { Metadata, NextPage } from 'next';

import { PageProtection } from '@/features/page-protection';
import HomePage from '@/views/home';

export const metadata: Metadata = {
  title: 'Family tree',
};

const Home: NextPage = () => {
  return (
    <PageProtection>
      <HomePage />
    </PageProtection>
  );
};

export default Home;
