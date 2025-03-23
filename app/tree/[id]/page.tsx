import { Metadata, NextPage } from 'next';

import { TreesApi } from '@/entities/trees/api/trees';
import { getSsrCookies } from '@/shared/lib';
import TreePage from '@/views/tree';

type TParams = {
  id: string;
};

type TProps = {
  params: Promise<TParams>;
};

export const generateMetadata = async (props: TProps): Promise<Metadata> => {
  const { id } = await props.params;
  const tree = await TreesApi.getOne(id, {
    Cookie: await getSsrCookies(),
  });

  return {
    title: `Family Tree | ${tree.name}`,
  };
};

const Tree: NextPage<TProps> = async (props) => {
  const { id } = await props.params;
  const tree = await TreesApi.getOne(id, {
    Cookie: await getSsrCookies(),
  });

  return <TreePage tree={tree} />;
};

export default Tree;
