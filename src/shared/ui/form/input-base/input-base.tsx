import { FC, memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/shared/lib/utils';

import { TInputBaseProps } from './model/props.model';

export const InputBase: FC<TInputBaseProps> = memo(
  ({
    name,
    required,
    shouldUnregister,
    onChange,
    onBlur,
    endAdornment,
    className,
    ...props
  }) => {
    const { register } = useFormContext();

    console.log('rerender', name);

    return (
      <div className="flex gap-2">
        <input
          id={name}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
          )}
          {...register(name, { onChange, onBlur, shouldUnregister })}
          {...props}
          aria-required={required}
        />
        {endAdornment}
      </div>
    );
  },
);

InputBase.displayName = 'InputBase';
