import { Metadata, NextPage } from 'next';

import { TreesApi } from '@/entities/trees/api';
import { getSsrCookies } from '@/shared/lib';
import TreePage from '@/views/tree';

type TParams = {
  id: string;
};

type TProps = {
  params: TParams;
};

export const generateMetadata = async ({
  params,
}: TProps): Promise<Metadata> => {
  const tree = await TreesApi.getOne(params.id, { Cookie: getSsrCookies() });

  return {
    title: `Family Tree | ${tree.name}`,
  };
};

const Tree: NextPage<TProps> = async ({ params }) => {
  const tree = await TreesApi.getOne(params.id, { Cookie: getSsrCookies() });

  return <TreePage tree={tree} />;
};

export default Tree;
