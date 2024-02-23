import { Add, Search } from '@mui/icons-material';
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { useState } from 'react';
import { useUiRoomStore } from '../../hooks/useUiRoomStore';

const rooms = [
  {
    id: 104,
    roomNumber: '104',
    floor: 'Primer piso',
    status: 'Abierto',
    availability: 'Disponible',
    observations: {},
    tasks: {},
  },
  {
    id: 108,
    roomNumber: '108',
    floor: 'Segundo piso',
    status: 'Abierto',
    availability: 'Disponible',
    observations: {},
    tasks: {},
  },
  {
    id: 109,
    roomNumber: '109',
    floor: 'Tercer piso',
    status: 'Cerrado',
    availability: 'No disponible',
    observations: {},
    tasks: {},
  },
  {
    id: 110,
    roomNumber: '110',
    floor: 'Tercer piso',
    status: 'Abierto',
    availability: 'Disponible',
    observations: {},
    tasks: {},
  },
  {
    id: 111,
    roomNumber: '111',
    floor: 'Cuarto piso',
    status: 'Cerrado',
    availability: 'No disponible',
    observations: {},
    tasks: {},
  },
  {
    id: 112,
    roomNumber: '112',
    floor: 'Cuarto piso',
    status: 'Abierto',
    availability: 'Disponible',
    observations: {},
    tasks: {},
  },
  {
    id: 113,
    roomNumber: '113',
    floor: 'Quinto piso',
    status: 'Abierto',
    availability: 'Disponible',
    observations: {},
    tasks: {},
  },
  {
    id: 114,
    roomNumber: '114',
    floor: 'Quinto piso',
    status: 'Cerrado',
    availability: 'No disponible',
    observations: {},
    tasks: {},
  },
  {
    id: 115,
    roomNumber: '115',
    floor: 'Sexto piso',
    status: 'Cerrado',
    availability: 'No disponible',
    observations: {},
    tasks: {},
  },
  {
    id: 116,
    roomNumber: '116',
    floor: 'Sexto piso',
    status: 'Abierto',
    availability: 'Disponible',
    observations: {},
    tasks: {},
  },
  {
    id: 117,
    roomNumber: '117',
    floor: 'Séptimo piso',
    status: 'Abierto',
    availability: 'Disponible',
    observations: {},
    tasks: {},
  },
];

export const RoomsTable: React.FC = () => {
  const { openTaskModal, openAssignPersonalModal } = useUiRoomStore();

  const [page, setPage] = useState(0); // Estado para la página actual
  const [rowsPerPage, setRowsPerPage] = useState(5); // Estado para la cantidad de filas por página

  const visibleRooms = rooms.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (_event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        margin="30px 0"
      >
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
        >
          <h3>Total ({rooms.length})</h3>
          <Button
            startIcon={<Add />}
            variant="contained"
            color="primary"
            sx={{
              fontSize: '16px',
              textTransform: 'capitalize',
              padding: '8px 20px',
            }}
          >
            Agregar nuevo
          </Button>
        </Grid>

        <Grid className="container__search-personal">
          <Search className="icon__search" />
          <input
            type="text"
            className="input__search"
            placeholder="Buscar habitación"
          />
        </Grid>
      </Grid>

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
              <TableRow
                key={room.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: '700' }}
                >
                  N° {room.roomNumber}
                </TableCell>
                <TableCell align="left">{room.floor}</TableCell>
                <TableCell align="left">{room.status}</TableCell>
                <TableCell align="left">{room.availability}</TableCell>
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
