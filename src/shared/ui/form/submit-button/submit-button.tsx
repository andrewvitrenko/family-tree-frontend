import { Loader2 } from 'lucide-react';
import { FC, memo } from 'react';
import { useFormState } from 'react-hook-form';

import { Button } from '@/shared/ui/button';

import { TSubmitButtonProps } from './model/props.model';

export const SubmitButton: FC<TSubmitButtonProps> = memo(
  ({ text, className }) => {
    const { isSubmitting } = useFormState();

    return (
      <Button type="submit" disabled={isSubmitting} className={className}>
        {isSubmitting && <Loader2 className="animate-spin" />} {text}
      </Button>
    );
  },
);

SubmitButton.displayName = 'SubmitButton';
