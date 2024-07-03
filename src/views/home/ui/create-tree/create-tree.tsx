'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, Input, Modal } from '@/shared/ui';

import { TCreateTreeForm } from './model/form.model';
import { TCreateTreeModalProps } from './model/props.model';
import * as styles from './styles';

const CreateTreeModal: FC<TCreateTreeModalProps> = ({
  open,
  onCancel,
  onSubmit,
}) => {
  const formMethods = useForm<TCreateTreeForm>();

  return (
    <Modal open={open} onClose={onCancel}>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <Typography sx={styles.title}>Create tree</Typography>
          <Input
            name="name"
            required
            label="Name"
            placeholder="Enter tree name"
            sx={styles.input}
            shouldUnregister
          />
          <Box sx={styles.buttons}>
            <Button variant="text" onClick={onCancel} sx={styles.button}>
              Cancel
            </Button>
            <Button variant="text" type="submit" sx={styles.button}>
              Create
            </Button>
          </Box>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default memo(CreateTreeModal);
