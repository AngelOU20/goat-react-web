import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const colorTheme = createTheme({
  palette: {
    primary: {
      main: '#1F3B51',
    },
    secondary: {
      main: '#F97878',
    },
    success: {
      main: '#81c784',
    },
    info: {
      main: grey[100],
    },
    error: {
      main: red.A400,
    },
  },
});
