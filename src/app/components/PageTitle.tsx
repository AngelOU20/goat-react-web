import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface titleProps {
  children: string;
}

export const PageTitle: React.FC<titleProps> = ({ children }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        textAlign: { xs: 'center', sm: 'left' },
        fontSize: { xs: '25px', sm: '30px' },
        fontWeight: '700',
        marginBottom: '4rem',
      }}
    >
      {children}
    </Typography>
  );
};

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
