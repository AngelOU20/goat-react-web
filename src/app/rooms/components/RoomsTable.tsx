import PropTypes from 'prop-types';
import { type Room } from '@/app/interfaces/interfaces';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { RoomsTableItem } from './RoomsTableItem';

interface RoomsTableProps {
  rooms: Room[];
  page: number;
  rowsPerPage: number;
  visibleRooms: Room[];
  handleChangePage: (_event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RoomsTable: React.FC<RoomsTableProps> = ({
  rooms,
  page,
  rowsPerPage,
  visibleRooms,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <>
      <TableContainer sx={{ maxHeight: 520 }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Número de habitación</TableCell>
              <TableCell align="left">Piso</TableCell>
              <TableCell align="left">Estado</TableCell>
              <TableCell align="left">Disponibilidad</TableCell>
              <TableCell align="center">Observaciones</TableCell>
              <TableCell align="center" colSpan={2}>
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRooms.map((room) => (
              <RoomsTableItem key={room.id} {...room} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, { label: 'All', value: 100 }]}
        component="div"
        count={rooms.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

RoomsTable.propTypes = {
  rooms: PropTypes.array.isRequired,
  visibleRooms: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
};
