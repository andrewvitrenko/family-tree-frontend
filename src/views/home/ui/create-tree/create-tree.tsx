'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Loader2, Plus } from 'lucide-react';
import { FC, memo, useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { InputOld, Modal } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { useCreateTree } from '@/views/home/api';

import { TCreateTreeForm } from './model/form.model';
import * as styles from './styles';

const CreateTree: FC = () => {
  const { mutateAsync } = useCreateTree();

  const [open, setOpen] = useState(false);

  const form = useForm<TCreateTreeForm>();

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
      <Button onClick={onOpen}>
        <Plus /> Create
      </Button>
      <Modal open={open} onClose={onClose}>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Typography sx={styles.title}>Create tree</Typography>
            <InputOld
              name="name"
              required
              label="Name"
              placeholder="Enter tree name"
              sx={styles.input}
              shouldUnregister
            />
            <Box sx={styles.actions}>
              <Button onClick={onClose} disabled={form.formState.isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin" />
                )}{' '}
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
