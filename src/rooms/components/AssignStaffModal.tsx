import {
  Backdrop,
  Box,
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useUiRoomStore } from '@/hooks';
import { useStaffStore } from '@/staff/hooks';
import { modalStyleAssignStaff } from '@/styles';

export const AssignStaffModal: React.FC = () => {
  const { isAssignPersonalModalOpen, closeAssignPersonalModal } = useUiRoomStore();

  const { staff } = useStaffStore();

  const handleClose = (): void => {
    closeAssignPersonalModal();
  };

  return (
    <Modal
      open={isAssignPersonalModalOpen}
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
        sx={modalStyleAssignStaff}
      >
        <h2>Asignar Personal</h2>

        <TableContainer>
          <Table sx={{ minWidth: 450 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Nombre completo</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">
                  Horas Trabajadas
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">
                  Tiempo de ejecución
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">
                  Calidad
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staff.map((personal) => (
                <TableRow
                  key={personal.nameComplete}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {personal.nameComplete}
                  </TableCell>
                  <TableCell align="center">8 horas</TableCell>
                  <TableCell align="center">Medio</TableCell>
                  <TableCell align="center">Regular</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ textTransform: 'capitalize' }}
                    >
                      Asignar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};
