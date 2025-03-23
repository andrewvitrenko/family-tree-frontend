'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { FC, memo } from 'react';
import { useController } from 'react-hook-form';

import { ErrorMessage } from '../error-message';
import { TSelectProps } from './model/props.model';
import { Content } from './ui/content';
import { Item } from './ui/item';
import { Trigger } from './ui/trigger';

export const Select: FC<TSelectProps> = memo(
  ({ name, options, placeholder, onBlur, onChange, shouldUnregister }) => {
    const { field } = useController({
      name,
      shouldUnregister,
      rules: { onBlur, onChange },
    });

    return (
      <div className="space-y-2">
        <SelectPrimitive.Select
          value={field.value}
          onValueChange={field.onChange}
        >
          <Trigger>
            <SelectPrimitive.Value placeholder={placeholder} />
          </Trigger>
          <Content>
            {options.map(({ label, value }) => (
              <Item key={value} value={value}>
                {label}
              </Item>
            ))}
          </Content>
        </SelectPrimitive.Select>
        <ErrorMessage name={name} />
      </div>
    );
  },
);

Select.displayName = 'Select';
