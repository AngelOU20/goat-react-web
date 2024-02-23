import PropTypes from 'prop-types';
import { Notifications } from '@mui/icons-material';

import {
  Avatar,
  Badge,
  Box,
  Container,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Toolbar,
} from '@mui/material';

interface Props {
  drawerWidth?: number;
}

const user = {
  id: 1,
  username: 'Renato Valer',
  role: 'Admin',
  photoURL: '/assets/user.png',
};

export const Header: React.FC<Props> = ({ drawerWidth = 240 }) => {
  return (
    <Box
      position="fixed"
      component="header"
      display="flex"
      alignItems="center"
      sx={{
        height: { sm: '100px' },
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        zIndex: 100,
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Grid container direction="row" justifyContent="end" alignItems="center">
            <Grid
              item
              xs={3}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={user.photoURL} />
                </ListItemAvatar>
                <ListItemText
                  sx={{ color: 'black' }}
                  primary={user.username}
                  secondary={user.role}
                />
              </ListItem>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={2} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </Box>
  );
};

Header.propTypes = {
  drawerWidth: PropTypes.number,
};
