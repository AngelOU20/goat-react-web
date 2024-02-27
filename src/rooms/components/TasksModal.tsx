import { Backdrop, Box, IconButton, InputBase, Modal, Typography } from '@mui/material';
import { useUiRoomStore } from '../../hooks/useUiRoomStore';
import { Close } from '@mui/icons-material';
import { modalStyle } from '../../styles';

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
        sx={modalStyle}
      >
        <IconButton className="close task-modal" onClick={handleClose}>
          <Close />
        </IconButton>
        <h2>Agregar tareas</h2>

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
