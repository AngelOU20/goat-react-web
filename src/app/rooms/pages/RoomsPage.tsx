import { Typography } from '@mui/material';
import { HostalLayout } from '@/app/layout/HostalLayout';
import { AssignStaffModal, RoomsTable, TasksModal } from '../components';

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
