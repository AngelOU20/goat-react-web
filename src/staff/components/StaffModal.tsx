import { useEffect } from 'react';
import { type Employee } from '../interfaces/interfaces';
import {
  Backdrop,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Modal,
} from '@mui/material';
import {
  Close,
  ContactPhone,
  MailOutline,
  Person2Outlined,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useForm, usePasswordToggle } from '../../hooks';
import { useStaffStore, useUiStaffStore } from '../hooks';

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  height: 680,
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 5,
};

const initialState = {
  _id: 0,
  nameComplete: '',
  user: '',
  isActive: true,
  email: '',
  number: '',
  password: '',
};

export const StaffModal: React.FC = () => {
  const { startSavingEmployee, clearEmployeeActive, activeEmployee } = useStaffStore();
  const { isStaffModalOpen, closeStaffModal } = useUiStaffStore();

  const { formState, setFormState, onInputChange, onResetForm } =
    useForm<Employee>(initialState);

  const { nameComplete, user, email, number, password } = formState;

  const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
    usePasswordToggle();

  useEffect(() => {
    if (activeEmployee !== null) {
      setFormState({ ...activeEmployee });
    } else {
      onResetForm();
    }
  }, [activeEmployee]);

  const handleClose = (): void => {
    closeStaffModal();
    clearEmployeeActive();
  };

  const onSubmit = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    void startSavingEmployee(formState);

    handleClose();
    onResetForm();
  };

  return (
    <>
      <Modal
        open={isStaffModalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 100,
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={style}
        >
          <IconButton className="close staff-modal" onClick={handleClose}>
            <Close />
          </IconButton>

          <Typography
            variant="h2"
            sx={{
              fontSize: '30px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '30px',
            }}
          >
            {activeEmployee === null ? 'Nuevo Personal' : 'Editar Personal'}
          </Typography>

          <Box
            component="form"
            onSubmit={onSubmit}
            display="flex"
            flexDirection="column"
            gap="10px"
          >
            <TextField
              label="Nombre completo"
              name="nameComplete"
              value={nameComplete}
              onChange={onInputChange}
              sx={{ m: 1, width: '350px' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Person2Outlined />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Usuario"
              name="user"
              value={user}
              onChange={onInputChange}
              sx={{ m: 1, width: '350px' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Person2Outlined />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Email"
              name="email"
              value={email}
              onChange={onInputChange}
              sx={{ m: 1, width: '350px' }}
              type="email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailOutline />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Número"
              name="number"
              value={number}
              onChange={onInputChange}
              sx={{ m: 1, width: '350px' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ContactPhone />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Contraseña"
              autoComplete="off"
              name="password"
              value={password}
              onChange={onInputChange}
              sx={{ m: 1, width: '350px' }}
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

            <Button
              variant="contained"
              type="submit"
              sx={{
                fontSize: '16px',
                fontWeight: '600',
                textTransform: 'capitalize',
                padding: '12px 20px',
                borderRadius: '5px',
                width: '350px',
                m: 1,
              }}
            >
              {activeEmployee === null ? 'Agregar nuevo personal' : 'Guardar'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
