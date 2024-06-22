import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';

import { Button, Modal } from '@/components/ui';

import * as styles from './styles';
import { TDeleteTreeModalProps } from './types';

const DeleteTreeModal: FC<TDeleteTreeModalProps> = ({
  onCancel,
  onSubmit,
  open,
  name,
}) => {
  return (
    <Modal open={open} onClose={onCancel}>
      <Box>
        <Typography sx={styles.title}>
          Are you sure you want to delete {name} tree?
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
