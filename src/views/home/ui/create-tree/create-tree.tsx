'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
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
import { Input } from '@/shared/ui/form';
import { SubmitButton } from '@/shared/ui/form';
import { useCreateTree } from '@/views/home/api';

import { validationSchema } from './config/form.config';
import { TCreateTreeForm } from './model/form.model';

export const CreateTree: FC = memo(() => {
  const { mutateAsync } = useCreateTree();

  const [open, setOpen] = useState(false);

  const form = useForm<TCreateTreeForm>({
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
    async (data: TCreateTreeForm) => {
      await mutateAsync(data);
      setOpen(false);
    },
    [mutateAsync],
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <Plus /> Create
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create tree</DialogTitle>
          <DialogDescription className="sr-only">
            Create new tree
          </DialogDescription>
        </DialogHeader>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Input
              name="name"
              required
              label="Name"
              placeholder="Enter tree name"
            />
            <DialogFooter className="mt-4">
              <Button variant="secondary" type="reset" onClick={onClose}>
                Cancel
              </Button>
              <SubmitButton text="Create" />
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
});

CreateTree.displayName = 'CreateTree';
