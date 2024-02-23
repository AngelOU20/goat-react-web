import {
  Backdrop,
  Box,
  IconButton,
  InputBase,
  Modal,
  Typography,
} from '@mui/material';
import { useUiRoomStore } from '../../hooks/useUiRoomStore';
import { Close } from '@mui/icons-material';

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

export const TasksModal: React.FC = () => {
  const { isTaskModalOpen, closeTaskModal } = useUiRoomStore();

  const handleClose = (): void => {
    closeTaskModal();
  };

  return (
    <Modal
      open={isTaskModalOpen}
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
        justifyContent="flex-start"
        gap="20px"
        sx={style}
      >
        <IconButton className="close task-modal" onClick={handleClose}>
          <Close />
        </IconButton>
        <h2>Agregar tareas</h2>
        {/* <FormControl
          sx={{ m: 1, backgroundColor: '#f8f8f8' }}
          variant="filled"
          fullWidth
        >
          <InputLabel>Agregar Tarea</InputLabel>
          <FilledInput />
        </FormControl> */}
        <InputBase
          fullWidth
          placeholder="Agregar tarea"
          sx={{
            m: 1,
            p: '10px',
            backgroundColor: '#f8f8f8',
            borderRadius: '10px',
          }}
        />
        <Typography
          variant="h3"
          component="h3"
          sx={{
            textAlign: 'start',
            fontSize: '24px',
            fontWeight: 600,
          }}
        >
          Lista de tareas
        </Typography>
      </Box>
    </Modal>
  );
};
