import PropTypes from 'prop-types';
import { Box, Container } from '@mui/material';
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
        {/* <Toolbar /> */}
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

HostalLayout.propTypes = {
  children: PropTypes.node,
};
