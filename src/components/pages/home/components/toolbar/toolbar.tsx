import IconPerson from '@mui/icons-material/Person';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MuiToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';

import * as styles from './styles';

const Toolbar: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <AppBar>
        <MuiToolbar sx={styles.container}>
          <Typography variant="h1" sx={styles.title}>
            Family tree
          </Typography>
          <IconButton sx={styles.profile}>
            <IconPerson />
          </IconButton>
        </MuiToolbar>
      </AppBar>
    </Box>
  );
};

export default memo(Toolbar);
