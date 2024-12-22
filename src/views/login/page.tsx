import Link from 'next/link';
import { FC } from 'react';

import { ERoute } from '@/shared/model/navigation.model';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';

import { LoginForm } from './ui/login-form';

const LoginPage: FC = () => {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center gap-8 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Log into system to use our best features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex-col">
          <p className="text-sm">Don&apos;t have an account?</p>
          <Button variant="link">
            <Link href={ERoute.SIGN_UP}>Create now</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
