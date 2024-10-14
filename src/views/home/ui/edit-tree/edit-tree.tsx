'use client';

import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FC, memo, useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, Input, Modal } from '@/shared/ui';
import { useUpdateTree } from '@/views/home/api';

import { TEditTreeForm } from './model/form.model';
import { TEditTreeProps } from './model/props.model';
import * as styles from './styles';

const EditTree: FC<TEditTreeProps> = ({ id, name }) => {
  const { mutateAsync } = useUpdateTree(id);

  const [open, setOpen] = useState(false);

  const methods = useForm<TEditTreeForm>({ defaultValues: { name } });

  const onOpen = () => setOpen(true);

  const onClose = () => {
    methods.reset();
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
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Typography sx={styles.title}>Update tree {name}</Typography>
            <Input
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
                variant="text"
                disabled={methods.formState.isSubmitting}
                sx={styles.button}
              >
                Cancel
              </Button>
              <Button
                variant="text"
                type="submit"
                loading={methods.formState.isSubmitting}
                sx={styles.button}
              >
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
