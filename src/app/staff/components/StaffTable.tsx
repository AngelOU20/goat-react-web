import { useState } from 'react';
import { Add } from '@mui/icons-material';
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
import SearchField from '@/app/components/SearchField';
import { useStaffStore, useUiStaffStore } from '../hooks';
import { StaffTableItem } from './';

export const StaffTable: React.FC = () => {
  const { staff } = useStaffStore();
  const { openStaffModal } = useUiStaffStore();

  const [page, setPage] = useState(0); // Estado para la página actual
  const [rowsPerPage, setRowsPerPage] = useState(5); // Estado para la cantidad de filas por página

  const visibleEmployees = staff.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (_event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onSearchEmployee = (): void => {
    console.log('Buscar empleado');
  };

  return (
    <>
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

      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre completo</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell align="right">Número de celular</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="center" colSpan={2}>
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleEmployees.map((employee) => (
              <StaffTableItem key={employee._id} {...employee} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        component="div"
        count={staff.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
