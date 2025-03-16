'use client';

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

import { TEditTreeForm } from './model/form.model';
import { TEditTreeProps } from './model/props.model';

export const EditTree: FC<TEditTreeProps> = memo(({ id, name }) => {
  const { mutateAsync } = useUpdateTree(id);

  const [open, setOpen] = useState(false);

  const form = useForm<TEditTreeForm>({ defaultValues: { name } });

  const onClose = () => {
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
    <Dialog open={open} onOpenChange={setOpen}>
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
