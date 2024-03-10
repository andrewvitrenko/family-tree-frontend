import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { Link } from '@/components/ui';
import { ERoute } from '@/types/routes';

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
