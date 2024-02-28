import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { colorTheme } from './colorTheme';

interface Props {
  children?: React.ReactNode;
}

export const AppTheme: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={colorTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

AppTheme.propTypes = {
  children: PropTypes.node,
};
