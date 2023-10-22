import { EnhancedTable, StaffModal } from '../components';
import { HostalLayout } from '../../hostal/layout/HostalLayout';
import { Container, Typography } from '@mui/material';

export const StaffPage: React.FC = () => {
  return (
    <HostalLayout>
      <Container>
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
        <EnhancedTable />
        <StaffModal />
      </Container>
    </HostalLayout>
  );
};
