'use client';

import { Eye, EyeOff } from 'lucide-react';
import { FC, memo, useState } from 'react';

import { Button } from '@/shared/ui';

import { Input } from '../input';
import { TPasswordInputProps } from './model/props.model';

export const PasswordInput: FC<TPasswordInputProps> = memo((props) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <Button
          key="password-icon"
          variant="secondary"
          size="icon"
          type="button"
          onClick={toggleShowPassword}
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </Button>
      }
    />
  );
});

PasswordInput.displayName = 'PasswordInput';
