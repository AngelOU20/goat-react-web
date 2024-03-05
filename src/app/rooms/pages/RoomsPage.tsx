import { HostalLayout } from '@/app/layout/HostalLayout';
import { AssignStaffModal, RoomsTable, TasksModal } from '../components';
import { PageTitle } from '@/app/components/PageTitle';
import { roomsData as rooms } from '@/lib/rooms';
import { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { Add } from '@mui/icons-material';
import { SearchField } from '@/app/components';

export const RoomsPage: React.FC = () => {
  const [page, setPage] = useState(0); // Estado para la página actual
  const [rowsPerPage, setRowsPerPage] = useState(5); // Estado para la cantidad de filas por página

  const visibleRooms = rooms.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (_event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <HostalLayout>
      <PageTitle>Habitaciones</PageTitle>

      <Grid
        container
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        gap="20px"
        margin="30px 0"
      >
        <Grid
          item
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="30px"
        >
          <h3>Total ({rooms.length})</h3>
          <Button
            startIcon={<Add />}
            variant="contained"
            color="primary"
            sx={{
              fontSize: { sx: '12px', sm: '16px' },
              textTransform: 'capitalize',
              padding: { sx: '6px 18px', sm: '8px 20px' },
            }}
          >
            Agregar nuevo
          </Button>
        </Grid>

        <SearchField placeholder="Buscar habitación" />
      </Grid>
      <RoomsTable
        rooms={rooms}
        page={page}
        rowsPerPage={rowsPerPage}
        visibleRooms={visibleRooms}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <TasksModal />
      <AssignStaffModal />
    </HostalLayout>
  );
};
