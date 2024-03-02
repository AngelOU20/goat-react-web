import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { StaffTableItem } from './';
import { type Employee } from '../interfaces/interfaces';

interface StaffTableProps {
  staff: Employee[];
  visibleEmployees: Employee[];
  page: number;
  rowsPerPage: number;
  handleChangePage: (_event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StaffTable: React.FC<StaffTableProps> = ({
  staff,
  visibleEmployees,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <>
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

StaffTable.propTypes = {
  staff: PropTypes.array.isRequired,
  visibleEmployees: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
};
