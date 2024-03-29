import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Drawer,
} from '@mui/material';
import { Dashboard, Person, Summarize, Settings, Logout } from '@mui/icons-material';
import { useAuthStore, useUiStore } from '@/hooks';

interface Props {
  drawerWidth?: number;
}

export const SideBar: React.FC<Props> = ({ drawerWidth = 240 }) => {
  const { startLogout } = useAuthStore();
  const { isDrawerOpen, onCloseDrawer } = useUiStore();

  const handleLogout = (): void => {
    startLogout();
  };

  return (
    <Drawer
      component="div"
      variant={`${isDrawerOpen ? 'temporary' : 'permanent'}`}
      anchor="left"
      open={true}
      transitionDuration={{
        enter: 500,
        exit: 500,
      }}
      onClose={onCloseDrawer}
      sx={{
        width: { sm: drawerWidth },

        '& .MuiDrawer-paper': {
          backgroundColor: 'primary.main',
          width: { sm: drawerWidth },
          height: '100vh',
          flexShrink: { sm: 0 },
          padding: '20px',
          flexDirection: 'column',
          gap: '80px',
        },

        display: {
          xs: isDrawerOpen ? 'block' : 'none',
          sm: 'flex',
        },
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Box component="div" display="flex" justifyContent="center" alignContent="center">
        <img src="/assets/logo_img.svg" alt="" />
        <h1 className="logo__goat__text">Golden Arequipa</h1>
      </Box>

      <Box
        component="nav"
        height="80%"
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        gap="60px"
        sx={{ color: 'white' }}
      >
        <List>
          <ListItem>
            <ListItemButton component={NavLink} to="/" className="btn__list__item">
              <ListItemIcon>
                <Dashboard className="icon__item" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              component={NavLink}
              to="/personal"
              className="btn__list__item"
            >
              <ListItemIcon>
                <Person className="icon__item" />
              </ListItemIcon>
              <ListItemText primary="Personal" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              component={NavLink}
              to="/habitaciones"
              className="btn__list__item"
            >
              <ListItemIcon>
                <Summarize className="icon__item" />
              </ListItemIcon>
              <ListItemText primary="Habitaciones" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemButton className="btn__list__item">
              <ListItemIcon>
                <Settings className="icon__item" />
              </ListItemIcon>
              <ListItemText primary="Configuración" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton className="btn__list__item" onClick={handleLogout}>
              <ListItemIcon>
                <Logout className="icon__item" />
              </ListItemIcon>
              <ListItemText primary="Cerrar Sesión" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number,
};
