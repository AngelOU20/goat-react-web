import PropTypes from 'prop-types';
import { useUiRoomStore } from '@/hooks';
import { Button, TableCell, TableRow } from '@mui/material';

interface RoomsTableItemProps {
  id: number;
  roomNumber: string;
  floor: string;
  status: string;
  isAvailability: boolean;
}

export const RoomsTableItem: React.FC<RoomsTableItemProps> = ({
  id,
  roomNumber,
  floor,
  status,
  isAvailability,
}) => {
  const { openTaskModal, openAssignPersonalModal } = useUiRoomStore();

  return (
    <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row" sx={{ fontWeight: '700' }}>
        N° {roomNumber}
      </TableCell>
      <TableCell align="left">{floor}</TableCell>
      <TableCell align="left">{status}</TableCell>
      <TableCell align="left">
        {isAvailability ? 'Disponible' : 'No disponible'}
      </TableCell>
      <TableCell align="center">
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          sx={{
            textTransform: 'capitalize',
          }}
        >
          Agregar Observaciones
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button
          size="small"
          variant="outlined"
          color="success"
          sx={{
            textTransform: 'capitalize',
          }}
          onClick={openAssignPersonalModal}
        >
          Asignar Personal
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button
          size="small"
          variant="outlined"
          color="primary"
          sx={{
            textTransform: 'capitalize',
          }}
          onClick={openTaskModal}
        >
          Asignar Tareas
        </Button>
      </TableCell>
    </TableRow>
  );
};

RoomsTableItem.propTypes = {
  id: PropTypes.number.isRequired,
  roomNumber: PropTypes.string.isRequired,
  floor: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isAvailability: PropTypes.bool.isRequired,
};
