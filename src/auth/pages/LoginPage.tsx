import { AuthLayout } from '../layout/AuthLayout';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { useForm, usePasswordToggle, useAuthStore } from '@/hooks';

const initialState = {
  email: '',
  password: '',
};

export const LoginPage: React.FC = () => {
  const { formState, onInputChange } = useForm(initialState);
  const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
    usePasswordToggle();
  const { status, startLogin } = useAuthStore();

  const onSubmit = (): void => {
    startLogin();
    console.log(status);
    console.log('Inicio de sesión exitoso');
  };

  return (
    <AuthLayout title={'Inicio de Sesión'}>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              autoComplete="off"
              fullWidth
              placeholder="correo@google.com"
              type="email"
              name="email"
              value={formState.email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              autoComplete="off"
              fullWidth
              name="password"
              value={formState.password}
              onChange={onInputChange}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            {/* Error Message */}
            {/* <Grid item xs={12} display={errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid> */}

            <Grid item xs={12} md={12} sx={{ mt: 1 }}>
              <Button type="submit" variant="contained" fullWidth>
                Iniciar Sesión
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
