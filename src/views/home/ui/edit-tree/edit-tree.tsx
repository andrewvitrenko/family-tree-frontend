'use client';

import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Loader2 } from 'lucide-react';
import { FC, memo, useCallback, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Modal } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/form';
import { useUpdateTree } from '@/views/home/api';

import { TEditTreeForm } from './model/form.model';
import { TEditTreeProps } from './model/props.model';
import * as styles from './styles';

const EditTree: FC<TEditTreeProps> = ({ id, name }) => {
  const { mutateAsync } = useUpdateTree(id);

  const [open, setOpen] = useState(false);

  const form = useForm<TEditTreeForm>({ defaultValues: { name } });

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
    async (data: TEditTreeForm) => {
      await mutateAsync(data);
      setOpen(false);
    },
    [mutateAsync],
  );

  return (
    <Box>
      <IconButton color="primary" onClick={onOpen}>
        <EditIcon />
      </IconButton>
      <Modal open={open} onClose={onClose}>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Typography sx={styles.title}>Update tree {name}</Typography>
            <Input
              required
              name="name"
              label="Name"
              placeholder="Enter new name"
              className="mt-2 max-w-[18.75rem]"
            />
            <Box sx={styles.actions}>
              <Button onClick={onClose} type="reset" disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="animate-spin" />} Save
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Modal>
    </Box>
  );
};

export default memo(EditTree);
