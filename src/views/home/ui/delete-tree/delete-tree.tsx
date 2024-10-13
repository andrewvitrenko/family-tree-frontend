'use client';

import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FC, memo, useCallback, useState } from 'react';

import { Button, Modal } from '@/shared/ui';
import { useDeleteTree } from '@/views/home/api';

import { TDeleteTreeProps } from './model/props.model';
import * as styles from './styles';

const DeleteTree: FC<TDeleteTreeProps> = ({ id, name }) => {
  const { mutateAsync, isPending } = useDeleteTree(id);

  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onDelete = useCallback(async () => {
    await mutateAsync();
    setOpen(false);
  }, [mutateAsync]);

  return (
    <Box>
      <IconButton color="warning" onClick={onOpen}>
        <DeleteIcon />
      </IconButton>
      <Modal open={open} onClose={onClose}>
        <Box>
          <Typography sx={styles.title}>
            Are you sure you want to delete {name} tree?
          </Typography>
          <Box sx={styles.actions}>
            <Button
              variant="text"
              sx={styles.button}
              disabled={isPending}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="text"
              sx={styles.button}
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

export default memo(DeleteTree);
