'use client';

import { Loader2, Trash } from 'lucide-react';
import { FC, memo, useCallback, useState } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/shared/ui/alert-dialog';
import { Button } from '@/shared/ui/button';
import { useDeleteTree } from '@/views/home/api';

import { TDeleteTreeProps } from './model/props.model';

export const DeleteTree: FC<TDeleteTreeProps> = memo(({ id, name }) => {
  const { mutateAsync, isPending } = useDeleteTree(id);

  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onDelete = useCallback(async () => {
    await mutateAsync();
    setOpen(false);
  }, [mutateAsync]);

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" onClick={onOpen} size="icon">
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete {name}?</AlertDialogTitle>
          <AlertDialogDescription>
            This action can&apos;t be undone
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onDelete} disabled={isPending}>
            {isPending && <Loader2 className="animate-spin" />} Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});

DeleteTree.displayName = 'DeleteTree';
