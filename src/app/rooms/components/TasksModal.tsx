import { Backdrop, Box, IconButton, InputBase, Modal, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useUiRoomStore } from '@/hooks';
import { modalStyle } from '@/styles';

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
        sx={{
          ...modalStyle,
          width: { xs: '400px', sm: '480px' },
          height: { xs: '600px', sm: '680px' },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'grey',
          }}
        >
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
          Agregar tareas
        </Typography>

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
