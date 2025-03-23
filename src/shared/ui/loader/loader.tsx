import { Loader2 } from 'lucide-react';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TLoaderProps } from './model/props.model';

export const Loader: FC<TLoaderProps> = memo(({ className, ...props }) => {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <Loader2 {...props} />
    </div>
  );
});

Loader.displayName = 'Loader';
