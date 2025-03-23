'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { PenLine } from 'lucide-react';
import { FC, memo, useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { Input, SubmitButton } from '@/shared/ui/form';
import { useUpdateTree } from '@/views/home/api';

import { validationSchema } from './config/form.config';
import { TEditTreeForm } from './model/form.model';
import { TEditTreeProps } from './model/props.model';

export const EditTree: FC<TEditTreeProps> = memo(({ id, name }) => {
  const { mutateAsync } = useUpdateTree(id);

  const [open, setOpen] = useState(false);

  const form = useForm<TEditTreeForm>({
    defaultValues: { name },
    resolver: zodResolver(validationSchema),
  });
  const { reset } = form;

  const onOpenChange = useCallback(
    (value: boolean) => {
      if (!value) {
        reset();
      }

      setOpen(value);
    },
    [reset],
  );

  const onClose = useCallback(() => {
    setOpen(false);
    reset();
  }, [reset]);

  const onSubmit = useCallback(
    async (data: TEditTreeForm) => {
      await mutateAsync(data);
      setOpen(false);
    },
    [mutateAsync],
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <PenLine />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit tree</DialogTitle>
          <DialogDescription>Change the tree&apos;s name</DialogDescription>
        </DialogHeader>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Input
              required
              name="name"
              label="Name"
              placeholder="Enter new name"
            />
            <DialogFooter className="mt-4">
              <Button variant="secondary" onClick={onClose} type="reset">
                Cancel
              </Button>
              <SubmitButton text="Submit" />
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
});

EditTree.displayName = 'EditTree';
