'use client';

import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC, memo, useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, Input, Modal } from '@/shared/ui';
import { useCreateTree } from '@/views/home/api';

import { TCreateTreeForm } from './model/form.model';
import * as styles from './styles';

const CreateTree: FC = () => {
  const { mutateAsync } = useCreateTree();

  const [open, setOpen] = useState(false);

  const methods = useForm<TCreateTreeForm>();

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onSubmit = useCallback(
    async (data: TCreateTreeForm) => {
      await mutateAsync(data);
      setOpen(false);
    },
    [mutateAsync],
  );

  return (
    <Box>
      <Button
        variant="text"
        sx={styles.trigger}
        onClick={onOpen}
        startIcon={<AddIcon />}
      >
        Create
      </Button>
      <Modal open={open} onClose={onClose}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Typography sx={styles.title}>Create tree</Typography>
            <Input
              name="name"
              required
              label="Name"
              placeholder="Enter tree name"
              sx={styles.input}
              shouldUnregister
            />
            <Box sx={styles.actions}>
              <Button
                variant="text"
                onClick={onClose}
                disabled={methods.formState.isSubmitting}
                sx={styles.action}
              >
                Cancel
              </Button>
              <Button
                variant="text"
                type="submit"
                loading={methods.formState.isSubmitting}
                sx={styles.action}
              >
                Create
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Modal>
    </Box>
  );
};

export default memo(CreateTree);
