import { Add, Delete, Edit, Search } from '@mui/icons-material';
import {
  Button,
  Grid,
  IconButton,
  // Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useUiStaffStore } from '../../hooks';

function createData(
  nameComplete: string,
  status: string,
  phoneNumber: string,
  email: string
): {
  nameComplete: string;
  status: string;
  phoneNumber: string;
  email: string;
} {
  return {
    nameComplete,
    status,
    phoneNumber,
    email,
  };
}

const rows = [
  createData('Juan Pérez', 'Activo', '987-654-321', 'juanPe@gmail.com'),
  createData('María Sánchez', 'Inactivo', '987-654-322', 'maria@gmail.com'),
  createData('Carlos López', 'Activo', '987-654-323', 'carlos@gmail.com'),
  createData('Laura Rodríguez', 'Activo', '987-654-324', 'laura@hotmail.com'),
  createData('Andrés Fernández', 'Inactivo', '987-654-325', 'andres@gmail.com'),
  createData('Ana Gómez', 'Activo', '987-654-326', 'ana@hotmail.com'),
];

export const EnhancedTable: React.FC = () => {
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
          <h3>Total ({rows.length})</h3>
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
            {rows.map((row) => (
              <TableRow
                key={row.nameComplete}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: '700' }}
                >
                  {row.nameComplete}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">+51 {row.phoneNumber}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <Edit />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
