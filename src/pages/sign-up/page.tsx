import { Box, Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';

import { ERoute } from '@/shared/model/navigation.model';
import { Link } from '@/shared/ui';

import * as styles from './styles';
import { Form } from './ui';

const SignUpPage: FC = () => {
  return (
    <Box sx={styles.container}>
      <Card sx={styles.card}>
        <CardContent>
          <Typography sx={styles.title}>Sign up</Typography>
          <Form />
        </CardContent>
      </Card>

      <Box sx={styles.footer}>
        <Typography>Already have an account?</Typography>
        <Link to={ERoute.LOGIN}>Log in</Link>
      </Box>
    </Box>
  );
};

export default SignUpPage;
