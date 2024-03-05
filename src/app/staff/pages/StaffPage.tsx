import { Add } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { usePagination } from '@/hooks';
import { HostalLayout } from '@/app/layout/HostalLayout';
import { PageTitle, SearchField } from '@/app/components';
import { StaffModal, StaffTable } from '../components';
import { useStaffStore, useUiStaffStore } from '../hooks';
import { type Employee } from '@/app/interfaces/interfaces';

export const StaffPage: React.FC = () => {
  const { staff } = useStaffStore();
  const { openStaffModal } = useUiStaffStore();

  const {
    page,
    rowsPerPage,
    visibleData: visibleEmployees,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination<Employee>(staff);

  const onSearchEmployee = (): void => {
    console.log('Buscar empleado');
  };

  return (
    <HostalLayout>
      <PageTitle>Administrar Personal</PageTitle>

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
          <h3>Total ({staff.length})</h3>
          <Button
            startIcon={<Add />}
            onClick={openStaffModal}
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

        <SearchField placeholder="Buscar personal" onClick={onSearchEmployee} />
      </Grid>

      <StaffTable
        staff={staff}
        visibleEmployees={visibleEmployees}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />

      <StaffModal />
    </HostalLayout>
  );
};
