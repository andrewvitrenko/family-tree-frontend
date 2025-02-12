'use client';

import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Loader2 } from 'lucide-react';
import { FC, memo, useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { InputOld, Modal } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { useUpdateTree } from '@/views/home/api';

import { TEditTreeForm } from './model/form.model';
import { TEditTreeProps } from './model/props.model';
import * as styles from './styles';

const EditTree: FC<TEditTreeProps> = ({ id, name }) => {
  const { mutateAsync } = useUpdateTree(id);

  const [open, setOpen] = useState(false);

  const form = useForm<TEditTreeForm>({ defaultValues: { name } });

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
            <InputOld
              required
              name="name"
              label="Name"
              placeholder="Enter new name"
              sx={styles.input}
            />
            <Box sx={styles.actions}>
              <Button
                onClick={onClose}
                type="reset"
                disabled={form.formState.isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin" />
                )}{' '}
                Save
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Modal>
    </Box>
  );
};

export default memo(EditTree);
