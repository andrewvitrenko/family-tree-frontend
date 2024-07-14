'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useShallow } from 'zustand/react/shallow';

import { useTreesStore } from '@/entities/trees/model';
import { Button, Input, Modal } from '@/shared/ui';

import { TEditTreeForm } from './model/form.model';
import { TEditTreeModalProps } from './model/props.model';
import * as styles from './styles';

const EditTreeModal: FC<TEditTreeModalProps> = ({
  onCancel,
  onSubmit,
  open,
}) => {
  const { tree } = useTreesStore(
    useShallow((state) => ({ tree: state.currentTree })),
  );

  const formMethods = useForm<TEditTreeForm>();

  return (
    <Modal open={open} onClose={onCancel}>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <Typography sx={styles.title}>Update tree {tree?.name}</Typography>
          <Input
            required
            shouldUnregister
            defaultValue={tree?.name}
            name="name"
            label="Name"
            placeholder="Enter new name"
            sx={styles.input}
          />
          <Box sx={styles.actions}>
            <Button onClick={onCancel} variant="text" sx={styles.button}>
              Cancel
            </Button>
            <Button variant="text" type="submit" sx={styles.button}>
              Edit
            </Button>
          </Box>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default memo(EditTreeModal);
