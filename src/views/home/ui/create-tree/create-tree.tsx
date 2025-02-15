'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Loader2, Plus } from 'lucide-react';
import { FC, memo, useCallback, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Modal } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/form';
import { useCreateTree } from '@/views/home/api';

import { TCreateTreeForm } from './model/form.model';
import * as styles from './styles';

const CreateTree: FC = () => {
  const { mutateAsync } = useCreateTree();

  const [open, setOpen] = useState(false);

  const form = useForm<TCreateTreeForm>();

  const isSubmitting = useMemo(
    () => form.formState.isSubmitting,
    [form.formState.isSubmitting],
  );

  const onOpen = () => setOpen(true);

  const onClose = () => {
    form.reset();
    setOpen(false);
  };

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
            <Input
              name="name"
              required
              label="Name"
              placeholder="Enter tree name"
              className="mt-4 max-w-[18.75rem]"
            />
            <Box sx={styles.actions}>
              <Button onClick={onClose} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="animate-spin" />} Create
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Modal>
    </Box>
  );
};

export default memo(CreateTree);
