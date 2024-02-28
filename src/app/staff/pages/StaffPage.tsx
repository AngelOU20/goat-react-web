import { Typography } from '@mui/material';
import { HostalLayout } from '@/app/layout/HostalLayout';
import { StaffTable, StaffModal } from '../components';

export const StaffPage: React.FC = () => {
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
        Administrar Personal
      </Typography>
      <StaffTable />
      <StaffModal />
    </HostalLayout>
  );
};
