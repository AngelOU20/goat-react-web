import { useState } from 'react';
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

import { useUiStaffStore } from '../../hooks';

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

export const StaffModal: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isStaffModalOpen, closeStaffModal } = useUiStaffStore();

  const handleClickShowPassword = (): void => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
  };

  const handleClose = (): void => {
    closeStaffModal();
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
          <IconButton className="close-icon" onClick={handleClose}>
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
            Nuevo Personal
          </Typography>

          <Box component="div" display="flex" flexDirection="column" gap="10px">
            <TextField
              label="Nombre completo"
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
              sx={{ m: 1, width: '350px' }}
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
              variant="outlined"
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
              Agregar nuevo personal
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
