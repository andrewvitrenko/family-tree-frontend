'use client';

import { FormControlLabel, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, DateInput, Input, Modal, Select } from '@/shared/ui';

import { sexes } from './config/form.config';
import { TCreateNodeForm } from './model/form.model';
import { TCreateNodeProps } from './model/props.model';
import * as styles from './styles';

const CreateNode: FC<TCreateNodeProps> = ({ onClose, onSubmit, open }) => {
  const methods = useForm<TCreateNodeForm>();

  const [alive, setAlive] = useState(false);

  const onToggleAlive = useCallback(() => setAlive((prev) => !prev), []);

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
            <FormControlLabel
              control={<Switch checked={alive} onChange={onToggleAlive} />}
              label="Still alive"
            />
            {!alive && (
              <DateInput
                name="dateOfDeath"
                label="Death date"
                maxDate={new Date()}
                shouldUnregister
              />
            )}
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

export default memo(CreateNode);
