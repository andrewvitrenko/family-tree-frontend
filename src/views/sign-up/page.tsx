import { FC } from 'react';

import { ERoute } from '@/shared/model/navigation.model';
import { Link } from '@/shared/ui';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';

import { Form } from './ui';

const SignUpPage: FC = () => {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-8 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>
            Sign up and use our latest features for free
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form />
        </CardContent>
        <CardFooter className="flex-col">
          <p>Already have an account?</p>
          <Link href={ERoute.LOGIN}>Log in</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpPage;
