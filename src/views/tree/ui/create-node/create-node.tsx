'use client';

import { FormControlLabel, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import { FC, memo, useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ButtonOld, Modal } from '@/shared/ui';
import { DateInput, Input, Select } from '@/shared/ui/form';

import { sexes } from './config/form.config';
import { TCreateNodeForm } from './model/form.model';
import { TCreateNodeProps } from './model/props.model';
import * as styles from './styles';

const CreateNode: FC<TCreateNodeProps> = ({
  onClose,
  onSubmit,
  open,
  maxDate,
  minDate,
}) => {
  const methods = useForm<TCreateNodeForm>();

  const [alive, setAlive] = useState(false);

  const onToggleAlive = () => setAlive((prev) => !prev);

  const dateOfBirth = useMemo(() => methods.watch('dateOfBirth'), [methods]);
  const dateOfDeath = useMemo(() => methods.watch('dateOfDeath'), [methods]);

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
            <Select
              name="sex"
              placeholder="Please select your gender"
              required
              options={sexes}
            />
            <DateInput
              name="dateOfBirth"
              placeholder="Birth date"
              required
              maxDate={maxDate ?? dateOfDeath ?? new Date()}
              minDate={minDate}
            />
            <FormControlLabel
              control={<Switch checked={alive} onChange={onToggleAlive} />}
              label="Still alive"
            />
            {!alive && (
              <DateInput
                name="dateOfDeath"
                placeholder="Death date"
                maxDate={new Date()}
                minDate={dateOfBirth}
                shouldUnregister
              />
            )}
            <ButtonOld
              disabled={!methods.formState.isValid}
              loading={methods.formState.isSubmitting}
              type="submit"
            >
              Add
            </ButtonOld>
          </Box>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default memo(CreateNode);
