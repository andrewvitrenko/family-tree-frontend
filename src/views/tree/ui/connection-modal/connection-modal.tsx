'use client';

import Box from '@mui/material/Box';
import { FC, memo, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, DateInput, Input, Modal, Select } from '@/shared/ui';

import { TConnectionForm } from '../../model/connection-form.model';
import { sexes } from './config/form.config';
import { TConnectionModalProps } from './model/props.model';
import * as styles from './styles';

const ConnectionModal: FC<TConnectionModalProps> = ({
  onClose,
  onSubmit,
  open,
}) => {
  const methods = useForm<TConnectionForm>();

  useEffect(() => {
    if (methods.formState.isSubmitSuccessful) onClose();
  }, [methods.formState.isSubmitSuccessful, onClose]);

  return (
    <Modal open={open} onClose={onClose}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box sx={styles.form}>
            <Input name="firstName" label="First name" required />
            <Input name="lastName" label="Last name" required />
            <Select name="sex" label="Sex" required options={sexes} />
            <DateInput
              name="dateOfBirth"
              label="Birth date"
              required
              maxDate={new Date()}
              defaultValue={new Date()}
            />
            <DateInput
              name="dateOfDeath"
              label="Death date"
              maxDate={new Date()}
            />
            <Button
              disabled={!methods.formState.isValid}
              loading={methods.formState.isSubmitting}
              type="submit"
            >
              Add
            </Button>
          </Box>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default memo(ConnectionModal);