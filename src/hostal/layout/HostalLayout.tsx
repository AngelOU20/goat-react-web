import PropTypes from 'prop-types';
import { Box, Toolbar } from '@mui/material';
import { Header, SideBar } from '../components';

interface Props {
  children: React.ReactNode;
}

const drawerWidth = 320;

export const HostalLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '100px' }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

HostalLayout.propTypes = {
  children: PropTypes.node,
};
