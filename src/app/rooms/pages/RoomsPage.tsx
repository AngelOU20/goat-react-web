import { Grid } from '@mui/material';
import { HostalLayout } from '@/app/layout/HostalLayout';
import { SearchField } from '@/app/components';
import { PageTitle } from '@/app/components/PageTitle';
import { roomsData as rooms } from '@/lib/rooms';
import { AssignStaffModal, RoomsTable, TasksModal } from '../components';
import { usePagination } from '@/hooks';
import { type Room } from '@/app/interfaces/interfaces';

export const RoomsPage: React.FC = () => {
  const {
    page,
    rowsPerPage,
    visibleData: visibleRooms,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination<Room>(rooms);

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
