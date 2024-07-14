'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useTreesStore } from '@/entities/trees/model';
import { Button, Modal } from '@/shared/ui';

import { TDeleteTreeModalProps } from './model/props.model';
import * as styles from './styles';

const DeleteTreeModal: FC<TDeleteTreeModalProps> = ({
  onCancel,
  onSubmit,
  open,
}) => {
  const { tree } = useTreesStore(
    useShallow((state) => ({ tree: state.currentTree })),
  );

  return (
    <Modal open={open} onClose={onCancel}>
      <Box>
        <Typography sx={styles.title}>
          Are you sure you want to delete {tree?.name} tree?
        </Typography>
        <Box sx={styles.actions}>
          <Button variant="text" sx={styles.button} onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="text" sx={styles.button} onClick={onSubmit}>
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default memo(DeleteTreeModal);
