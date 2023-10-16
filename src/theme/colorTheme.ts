import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const colorTheme = createTheme({
  palette: {
    primary: {
      main: '#1F3B51',
    },
    secondary: {
      main: '#F97878',
    },
    error: {
      main: red.A400,
    },
  },
});
