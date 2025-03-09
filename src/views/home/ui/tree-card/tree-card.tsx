'use client';

import { useRouter } from 'next/navigation';
import { FC, memo, MouseEvent, useCallback } from 'react';

import { ERoute } from '@/shared/model/navigation.model';
import { Card, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card';
import { DeleteTree, EditTree } from '@/views/home/ui';

import { TTreeCardProps } from './model/props.model';

export const TreeCard: FC<TTreeCardProps> = memo(({ editable, tree }) => {
  const router = useRouter();

  const onClick = useCallback(
    () => router.push(`${ERoute.TREE}/${tree.id}`),
    [router, tree.id],
  );

  const onActionsClick = useCallback(
    (e: MouseEvent) => e.stopPropagation(),
    [],
  );

  return (
    <Card className="cursor-pointer" onClick={onClick}>
      <CardHeader>
        <CardTitle>{tree.name}</CardTitle>
      </CardHeader>
      <CardFooter className="justify-end" onClick={onActionsClick}>
        {editable && <EditTree id={tree.id} name={tree.name} />}
        <DeleteTree id={tree.id} name={tree.name} />
      </CardFooter>
    </Card>
  );
});

TreeCard.displayName = 'TreeCard';
