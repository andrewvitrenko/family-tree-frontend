'use client';

import { FC, memo } from 'react';

import { ErrorMessage } from '../error-message';
import { Label } from '../label';
import { TInputProps } from './model/props.model';
import { InputBase } from './ui/input-base';

export const Input: FC<TInputProps> = memo((props) => {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={props.name}
        required={props.required}
        text={props.label}
        name={props.name}
      />
      <InputBase {...props} />
      <ErrorMessage name={props.name} />
    </div>
  );
});

Input.displayName = 'Input';
