import LogoutIcon from '@mui/icons-material/Logout';
import IconPerson from '@mui/icons-material/Person';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MuiToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC, memo, useRef, useState } from 'react';

import { useAuth } from '@/hooks/use-auth';

import * as styles from './styles';

const Toolbar: FC = () => {
  const { logout } = useAuth();

  const anchor = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box sx={styles.wrapper}>
      <AppBar>
        <MuiToolbar sx={styles.container}>
          <Typography variant="h1" sx={styles.title}>
            Family tree
          </Typography>
          <IconButton
            sx={styles.profile}
            ref={anchor}
            onClick={() => setMenuOpen(true)}
          >
            <IconPerson />
          </IconButton>
          <Menu
            open={menuOpen}
            anchorEl={anchor.current}
            onClose={() => setMenuOpen(false)}
          >
            <MenuItem sx={styles.menuItem} onClick={logout}>
              <LogoutIcon /> <Typography>Logout</Typography>
            </MenuItem>
          </Menu>
        </MuiToolbar>
      </AppBar>
    </Box>
  );
};

export default memo(Toolbar);
