'use client';

import { FormControlLabel, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import { Loader2 } from 'lucide-react';
import { FC, memo, useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Modal } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
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
  const form = useForm<TCreateNodeForm>();

  const [alive, setAlive] = useState(false);

  const onToggleAlive = () => setAlive((prev) => !prev);

  const dateOfBirth = useMemo(() => form.watch('dateOfBirth'), [form]);
  const dateOfDeath = useMemo(() => form.watch('dateOfDeath'), [form]);

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) onClose();
  }, [form.formState.isSubmitSuccessful, onClose]);

  return (
    <Modal open={open} onClose={onClose}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
            <Button disabled={!form.formState.isValid} type="submit">
              {form.formState.isSubmitting && (
                <Loader2 className="animate-spin" />
              )}{' '}
              Add
            </Button>
          </Box>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default memo(CreateNode);
