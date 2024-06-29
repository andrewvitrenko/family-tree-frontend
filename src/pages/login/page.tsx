import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { ERoute } from '@/shared/model/navigation';
import { Link } from '@/shared/ui';

import * as styles from './styles';
import { Form } from './ui';

const LoginPage: FC = () => {
  return (
    <Box sx={styles.container}>
      <Card sx={styles.card}>
        <CardContent>
          <Typography variant="h1" sx={styles.title}>
            Login
          </Typography>
          <Form />
        </CardContent>
      </Card>

      <Box sx={styles.footer}>
        <Typography>Don&apos;t have an account?</Typography>
        <Link to={ERoute.SIGN_UP}>Create now</Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
