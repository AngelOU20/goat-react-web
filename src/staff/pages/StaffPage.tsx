import { StaffTable, StaffModal } from '../components';
import { HostalLayout } from '../../layout/HostalLayout';
import { Typography } from '@mui/material';

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
