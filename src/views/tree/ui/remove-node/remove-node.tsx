'use client';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { FC, memo, useCallback, useState } from 'react';

import { Button, Modal } from '@/shared/ui';
import { useRemoveNode } from '@/views/tree/api/use-remove-node';
import { TRouteParams } from '@/views/tree/model/route.model';

import { TRemoveNodeProps } from './model/props.model';
import * as styles from './styles';

const RemoveNode: FC<TRemoveNodeProps> = ({ firstName, id, lastName }) => {
  const { isPending, mutateAsync } = useRemoveNode();

  const params = useParams<TRouteParams>();

  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onDelete = useCallback(async () => {
    await mutateAsync({ nodeId: id, treeId: params.id });
    setOpen(false);
  }, [id, mutateAsync, params.id]);

  return (
    <Box sx={styles.container}>
      <Button sx={styles.trigger} onClick={onOpen}>
        <CloseRoundedIcon />
      </Button>
      <Modal open={open} onClose={onClose}>
        <Box>
          <Typography sx={styles.heading}>
            Are you sure you want to delete {firstName} {lastName}?
          </Typography>
          <Box sx={styles.actions}>
            <Button
              sx={styles.actionButton}
              variant="text"
              disabled={isPending}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              sx={styles.actionButton}
              variant="text"
              loading={isPending}
              onClick={onDelete}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default memo(RemoveNode);
