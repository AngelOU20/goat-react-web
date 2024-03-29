import PropTypes from 'prop-types';
import { Box, Container } from '@mui/material';
import { Header, SideBar } from '@/app/components';

interface Props {
  children: React.ReactNode;
}

const drawerWidth = 300;

export const HostalLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: '100px',
          width: {
            xs: '100%',
            sm: `calc(100% - ${drawerWidth}px)`,
          },
        }}
      >
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

HostalLayout.propTypes = {
  children: PropTypes.node,
};
