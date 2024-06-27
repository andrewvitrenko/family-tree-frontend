import { Box, Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';

import { ERoute } from '@/shared/entities/navigation';
import { Link } from '@/shared/ui';

import SignUpForm from './components/form';
import * as styles from './styles';

const SignUp: FC = () => {
  return (
    <Box sx={styles.container}>
      <Card sx={styles.card}>
        <CardContent>
          <Typography sx={styles.title}>Sign up</Typography>
          <SignUpForm />
        </CardContent>
      </Card>

      <Box sx={styles.footer}>
        <Typography>Already have an account?</Typography>
        <Link to={ERoute.LOGIN}>Log in</Link>
      </Box>
    </Box>
  );
};

export default SignUp;
