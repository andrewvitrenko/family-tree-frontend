'use client';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Node, useNodes } from '@xyflow/react';
import { useParams } from 'next/navigation';
import { FC, memo, useCallback, useMemo, useState } from 'react';

import { TAddRelativePayload } from '@/entities/trees/api/model';
import { ESex } from '@/entities/user';
import { mergeSx } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { useTree } from '@/views/tree/lib';
import { TRouteParams } from '@/views/tree/model/route.model';

import { TAddRelativeProps } from '../../lib/use-tree';
import ConnectionModal from '../connection-modal';
import { TConnectionButtonProps } from './model/props.model';
import * as styles from './styles';

const ConnectionButton: FC<TConnectionButtonProps> = ({
  sx,
  connectionType,
  sourceId,
}) => {
  const params = useParams<TRouteParams>();
  const nodes = useNodes();

  const { addParent, addChild, isAddingParent, isAddingChild } = useTree();

  const [open, setOpen] = useState(false);

  const currentNode = useMemo(
    () => nodes.find((node) => node.id === sourceId) as Node,
    [nodes, sourceId],
  );

  const onClick = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onSubmit = useCallback(
    (data: Omit<TAddRelativePayload, 'x' | 'y'>) => {
      const { x, y } = currentNode.position;
      const adjustedX = data.sex === ESex.MALE ? x + 200 : x - 200;
      const adjustedY = connectionType === 'parent' ? y - 300 : y + 300;

      const payload: TAddRelativeProps = {
        treeId: params.id,
        data: { ...data, x: adjustedX, y: adjustedY },
        sourceId,
      };

      connectionType === 'parent' ? addParent(payload) : addChild(payload);
    },
    [
      addChild,
      addParent,
      params.id,
      connectionType,
      sourceId,
      currentNode.position,
    ],
  );

  return (
    <>
      <Button sx={mergeSx(styles.button, sx)} onClick={onClick}>
        <AddRoundedIcon />
      </Button>
      <ConnectionModal
        open={open}
        onClose={onClose}
        onSubmit={onSubmit}
        isLoading={isAddingParent || isAddingChild}
      />
    </>
  );
};

export default memo(ConnectionButton);
