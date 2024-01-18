import { Box, Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';

import * as styles from './styles';

const Login: FC = () => {
  return (
    <Box sx={styles.container}>
      <Card>
        <CardContent>
          <Typography>Login</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
