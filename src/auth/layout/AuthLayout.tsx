import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width: { sm: 450 },
          backgroundColor: '#fff',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center', fontWeight: 600 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};

AuthLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
