import { Typography } from '@mui/material';
import { HostalLayout } from '../../layout/HostalLayout';
import { RoomsTable, TasksModal } from '../components';
import { AssignStaffModal } from '../components/AssignStaffModal';

export const RoomsPage: React.FC = () => {
  return (
    <HostalLayout>
      <Typography
        variant="h2"
        sx={{
          fontSize: '30px',
          fontWeight: '700',
          marginBottom: '4rem',
        }}
      >
        Habitaciones
      </Typography>
      <RoomsTable />
      <TasksModal />
      <AssignStaffModal />
    </HostalLayout>
  );
};
