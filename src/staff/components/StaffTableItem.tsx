import PropTypes from 'prop-types';
import { Delete, Edit } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';
import { useStaffStore, useUiStaffStore } from '../hooks';

interface Props {
  _id: number;
  isActive: boolean;
  user?: string;
  nameComplete: string;
  number: string;
  email: string;
  password: string;
}

export const StaffTableItem: React.FC<Props> = ({
  _id,
  isActive,
  user,
  nameComplete,
  number,
  email,
  password,
}) => {
  const { setActiveEmployee, startDeletingEmployee } = useStaffStore();
  const { openStaffModal } = useUiStaffStore();

  const onActiveEmployee = (): void => {
    setActiveEmployee({
      _id,
      isActive,
      user,
      nameComplete,
      number,
      email,
      password,
    });
    openStaffModal();
  };

  const onDelete = (): void => {
    setActiveEmployee({
      _id,
      isActive,
      user,
      nameComplete,
      number,
      email,
      password,
    });
    startDeletingEmployee();
  };

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row" sx={{ fontWeight: '700' }}>
        {nameComplete}
      </TableCell>
      <TableCell align="right">{isActive ? 'Activo' : 'Inactivo'}</TableCell>
      <TableCell align="right">+51 {number}</TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="center">
        <IconButton onClick={onActiveEmployee}>
          <Edit />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton onClick={onDelete}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

StaffTableItem.propTypes = {
  _id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  user: PropTypes.string,
  nameComplete: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
