import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import LoginForm from './components/form';
import * as styles from './styles';

const Login: FC = () => {
  return (
    <Box sx={styles.container}>
      <Card sx={styles.card}>
        <CardContent>
          <Typography variant="h1" sx={styles.title}>
            Login
          </Typography>
          <LoginForm />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
