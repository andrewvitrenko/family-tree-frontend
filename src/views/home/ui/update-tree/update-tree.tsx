'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, Input, Modal } from '@/shared/ui';

import { TUpdateTreeForm } from './model/form.model';
import { TUpdateTreeModalProps } from './model/props.model';
import * as styles from './styles';

const UpdateTreeModal: FC<TUpdateTreeModalProps> = ({
  name,
  onCancel,
  onSubmit,
  open,
}) => {
  const formMethods = useForm<TUpdateTreeForm>();

  return (
    <Modal open={open} onClose={onCancel}>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <Typography sx={styles.title}>Update tree {name}</Typography>
          <Input
            required
            shouldUnregister
            defaultValue={name}
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

export default memo(UpdateTreeModal);
