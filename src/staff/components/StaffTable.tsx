import { Add, Search } from '@mui/icons-material';
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useStaffStore, useUiStaffStore } from '../../hooks';
import { StaffTableItem } from './';

export const StaffTable: React.FC = () => {
  const { staff } = useStaffStore();
  const { openStaffModal } = useUiStaffStore();

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
          <h3>Total ({staff.length})</h3>
          <Button
            startIcon={<Add />}
            onClick={openStaffModal}
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
            placeholder="Buscar personal"
          />
        </Grid>
      </Grid>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
            {staff.map((employee) => (
              <StaffTableItem key={employee._id} {...employee} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
